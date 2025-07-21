import { useState, useCallback, useEffect } from 'react';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface FieldConfig {
  [key: string]: ValidationRule;
}

export interface FormErrors {
  [key: string]: string;
}

export interface FormTouched {
  [key: string]: boolean;
}

export interface UseFormValidationReturn {
  values: { [key: string]: string };
  errors: FormErrors;
  touched: FormTouched;
  isValid: boolean;
  isSubmitting: boolean;
  setValue: (field: string, value: string) => void;
  setFieldTouched: (field: string) => void;
  validateField: (field: string, value: string) => string;
  validateForm: () => boolean;
  handleSubmit: (onSubmit: (values: { [key: string]: string }) => Promise<void>) => (e: React.FormEvent) => void;
  reset: () => void;
}

export const useFormValidation = (
  initialValues: { [key: string]: string },
  validationRules: FieldConfig
): UseFormValidationReturn => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((field: string, value: string): string => {
    const rules = validationRules[field];
    if (!rules) return '';

    // Required validation
    if (rules.required && (!value || value.trim() === '')) {
      return 'هذا الحقل مطلوب';
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim() === '') return '';

    // Min length validation
    if (rules.minLength && value.length < rules.minLength) {
      return `يجب أن يحتوي على ${rules.minLength} أحرف على الأقل`;
    }

    // Max length validation
    if (rules.maxLength && value.length > rules.maxLength) {
      return `يجب ألا يزيد عن ${rules.maxLength} حرف`;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
      if (field === 'email') {
        return 'يرجى إدخال بريد إلكتروني صحيح';
      }
      if (field === 'phone') {
        return 'يرجى إدخال رقم هاتف صحيح (مثال: 0501234567)';
      }
      return 'تنسيق غير صحيح';
    }

    // Custom validation
    if (rules.custom) {
      const customError = rules.custom(value);
      if (customError) return customError;
    }

    return '';
  }, [validationRules]);

  const setValue = useCallback((field: string, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation for touched fields
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  }, [touched, validateField]);

  const setFieldTouched = useCallback((field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate field when it becomes touched
    const error = validateField(field, values[field] || '');
    setErrors(prev => ({ ...prev, [field]: error }));
  }, [values, validateField]);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isFormValid = true;

    Object.keys(validationRules).forEach(field => {
      const error = validateField(field, values[field] || '');
      if (error) {
        newErrors[field] = error;
        isFormValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(validationRules).reduce((acc, field) => {
      acc[field] = true;
      return acc;
    }, {} as FormTouched));

    return isFormValid;
  }, [values, validationRules, validateField]);

  const handleSubmit = useCallback((onSubmit: (values: { [key: string]: string }) => Promise<void>) => {
    return async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (isSubmitting) return;
      
      const isFormValid = validateForm();
      if (!isFormValid) return;

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    };
  }, [values, validateForm, isSubmitting]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const isValid = Object.keys(validationRules).every(field => {
    const error = validateField(field, values[field] || '');
    return !error;
  }) && Object.keys(validationRules).every(field => values[field]?.trim());

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    setValue,
    setFieldTouched,
    validateField,
    validateForm,
    handleSubmit,
    reset
  };
};