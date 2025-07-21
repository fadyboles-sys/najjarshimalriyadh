import React from 'react';
import { AlertCircle, CheckCircle2, Eye, EyeOff } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea';
  value: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  showPasswordToggle?: boolean;
  rows?: number;
  maxLength?: number;
  onChange: (value: string) => void;
  onBlur: () => void;
  onFocus?: () => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  error,
  touched,
  placeholder,
  required,
  disabled,
  showPasswordToggle,
  rows = 4,
  maxLength,
  onChange,
  onBlur,
  onFocus
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const hasError = touched && error;
  const isValid = touched && !error && value.trim() !== '';
  const actualType = type === 'password' && showPassword ? 'text' : type;

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  const baseInputClasses = `
    w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 
    placeholder-gray-400 text-gray-900 bg-white
    focus:outline-none focus:ring-0
    ${disabled ? 'bg-gray-50 cursor-not-allowed' : ''}
    ${hasError 
      ? 'border-red-300 focus:border-red-500 bg-red-50' 
      : isValid 
        ? 'border-green-300 focus:border-green-500 bg-green-50'
        : isFocused
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-300 hover:border-gray-400'
    }
  `;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>
      
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            maxLength={maxLength}
            className={`${baseInputClasses} resize-none`}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={actualType}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            className={baseInputClasses}
            autoComplete={type === 'password' ? 'current-password' : 'on'}
          />
        )}

        {/* Password toggle */}
        {type === 'password' && showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}

        {/* Status icons */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {hasError && (
            <AlertCircle size={20} className="text-red-500" />
          )}
          {isValid && (
            <CheckCircle2 size={20} className="text-green-500" />
          )}
        </div>

        {/* Character count */}
        {maxLength && (type === 'textarea' || type === 'text') && (
          <div className="absolute bottom-2 left-2 text-xs text-gray-400">
            {value.length}/{maxLength}
          </div>
        )}
      </div>

      {/* Error message */}
      {hasError && (
        <div className="flex items-center gap-2 text-sm text-red-600 animate-in slide-in-from-top-1 duration-200">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      {/* Success message */}
      {isValid && (
        <div className="flex items-center gap-2 text-sm text-green-600 animate-in slide-in-from-top-1 duration-200">
          <CheckCircle2 size={16} />
          <span>تم التحقق بنجاح</span>
        </div>
      )}

      {/* Help text for specific fields */}
      {name === 'phone' && !hasError && !isValid && (
        <div className="text-xs text-gray-500">
          مثال: 0501234567 أو +966501234567
        </div>
      )}
      {name === 'email' && !hasError && !isValid && (
        <div className="text-xs text-gray-500">
          مثال: example@email.com
        </div>
      )}
    </div>
  );
};