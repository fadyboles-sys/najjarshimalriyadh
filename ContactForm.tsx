import React, { useState } from 'react';
import { Send, Loader2, Calculator, Clock } from 'lucide-react';
import { useFormValidation, FieldConfig } from '../hooks/useFormValidation';
import { FormField } from './FormField';
import { SuccessModal } from './SuccessModal';

const validationRules: FieldConfig = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[\u0600-\u06FFa-zA-Z\s]+$/
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    required: true,
    pattern: /^(\+966|966|0)?[5][0-9]{8}$/
  },
  service: {
    required: true
  },
  budget: {
    required: false
  },
  timeline: {
    required: false
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 500
  }
};

const initialValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  timeline: '',
  message: ''
};

export const ContactForm: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ [key: string]: string }>({});

  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    setValue,
    setFieldTouched,
    handleSubmit,
    reset
  } = useFormValidation(initialValues, validationRules);

  const services = [
    'تفصيل خزائن ملابس',
    'تصميم مطابخ خشبية',
    'أثاث غرف النوم',
    'أبواب خشبية',
    'ديكورات خشبية',
    'نجارة عامة',
    'استشارة تصميم',
    'أخرى'
  ];

  const budgetRanges = [
    'أقل من 5,000 ريال',
    '5,000 - 10,000 ريال',
    '10,000 - 20,000 ريال',
    '20,000 - 50,000 ريال',
    'أكثر من 50,000 ريال'
  ];

  const timelineOptions = [
    'أسبوع واحد',
    'أسبوعين',
    'شهر واحد',
    'شهرين',
    'أكثر من شهرين',
    'مرن'
  ];

  const onSubmit = async (formValues: { [key: string]: string }) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmittedData(formValues);
    setShowSuccessModal(true);
    reset();
  };

  const progressPercentage = Math.round(
    (Object.keys(validationRules).filter(field => 
      values[field]?.trim() && !errors[field]
    ).length / Object.keys(validationRules).length) * 100
  );

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            احصل على عرض سعر مجاني
          </h2>
          <p className="text-gray-600">
            املأ النموذج وسنتواصل معك خلال 24 ساعة لتقديم عرض سعر مفصل
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">تقدم النموذج</span>
            <span className="text-sm text-gray-500">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="الاسم الكامل"
              name="name"
              value={values.name}
              error={errors.name}
              touched={touched.name}
              placeholder="أدخل اسمك الكامل"
              required
              onChange={(value) => setValue('name', value)}
              onBlur={() => setFieldTouched('name')}
            />

            <FormField
              label="رقم الهاتف"
              name="phone"
              type="tel"
              value={values.phone}
              error={errors.phone}
              touched={touched.phone}
              placeholder="0501234567"
              required
              onChange={(value) => setValue('phone', value)}
              onBlur={() => setFieldTouched('phone')}
            />
          </div>

          <FormField
            label="البريد الإلكتروني"
            name="email"
            type="email"
            value={values.email}
            error={errors.email}
            touched={touched.email}
            placeholder="example@email.com"
            required
            onChange={(value) => setValue('email', value)}
            onBlur={() => setFieldTouched('email')}
          />

          {/* Service Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              الخدمة المطلوبة <span className="text-red-500 mr-1">*</span>
            </label>
            <select
              value={values.service}
              onChange={(e) => setValue('service', e.target.value)}
              onBlur={() => setFieldTouched('service')}
              className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-0 ${
                touched.service && errors.service
                  ? 'border-red-300 focus:border-red-500 bg-red-50'
                  : touched.service && !errors.service && values.service
                    ? 'border-green-300 focus:border-green-500 bg-green-50'
                    : 'border-gray-300 focus:border-blue-500 hover:border-gray-400'
              }`}
            >
              <option value="">اختر الخدمة المطلوبة</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            {touched.service && errors.service && (
              <div className="text-sm text-red-600 flex items-center gap-2">
                <span>{errors.service}</span>
              </div>
            )}
          </div>

          {/* Optional fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calculator size={16} />
                الميزانية المتوقعة (اختياري)
              </label>
              <select
                value={values.budget}
                onChange={(e) => setValue('budget', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">اختر الميزانية المتوقعة</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <Clock size={16} />
                الإطار الزمني (اختياري)
              </label>
              <select
                value={values.timeline}
                onChange={(e) => setValue('timeline', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">متى تريد إنجاز المشروع؟</option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <FormField
            label="تفاصيل المشروع"
            name="message"
            type="textarea"
            value={values.message}
            error={errors.message}
            touched={touched.message}
            placeholder="اكتب تفاصيل مشروعك، المساحة، التصميم المطلوب، أو أي متطلبات خاصة..."
            required
            rows={5}
            maxLength={500}
            onChange={(value) => setValue('message', value)}
            onBlur={() => setFieldTouched('message')}
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-3 ${
              !isValid || isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                جاري الإرسال...
              </>
            ) : (
              <>
                <Send size={20} />
                إرسال الطلب
              </>
            )}
          </button>

          {/* Form validation summary */}
          {Object.keys(touched).length > 0 && !isValid && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm">
                يرجى مراجعة الحقول المطلوبة وتصحيح الأخطاء قبل الإرسال
              </p>
            </div>
          )}
        </form>

        {/* Trust indicators */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>استجابة خلال 24 ساعة</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>عرض سعر مجاني</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>استشارة مجانية</span>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="تم إرسال طلبك بنجاح!"
        message="شكراً لك على التواصل معنا. تم استلام طلبك وسنتواصل معك قريباً لتقديم عرض سعر مفصل ومناقشة تفاصيل مشروعك."
        submittedData={submittedData}
      />
    </>
  );
};