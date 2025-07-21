import React from 'react';
import { CheckCircle2, X, MessageCircle, Phone } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  submittedData?: { [key: string]: string };
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  submittedData
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Message */}
        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed">{message}</p>
        </div>

        {/* Submitted data summary */}
        {submittedData && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">ملخص طلبك:</h4>
            <div className="space-y-2">
              {Object.entries(submittedData).map(([key, value]) => {
                if (!value) return null;
                
                const labels: { [key: string]: string } = {
                  name: 'الاسم',
                  email: 'البريد الإلكتروني',
                  phone: 'رقم الهاتف',
                  service: 'الخدمة المطلوبة',
                  message: 'تفاصيل الطلب',
                  budget: 'الميزانية المتوقعة',
                  timeline: 'الإطار الزمني'
                };

                return (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{labels[key] || key}:</span>
                    <span className="font-medium text-gray-900 text-right max-w-48 truncate">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Next steps */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 mb-2">الخطوات التالية:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• سنتواصل معك خلال 24 ساعة</li>
            <li>• سنرسل عرض سعر مفصل</li>
            <li>• يمكنك تحديد موعد للمعاينة</li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            إغلاق
          </button>
          <a
            href="https://wa.me/966549716136"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            واتساب
          </a>
          <a
            href="tel:+966549716136"
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            اتصال
          </a>
        </div>
      </div>
    </div>
  );
};