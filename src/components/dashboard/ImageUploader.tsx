'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import {
UploadCloud,
X,
AlertTriangle,
RefreshCw,
} from 'lucide-react';

interface ImageUploaderProps {
value: string;
onChange: (url: string) => void;
altValue?: string;
onAltChange?: (alt: string) => void;
}

export default function ImageUploader({
value,
onChange,
altValue = '',
onAltChange,
}: ImageUploaderProps) {
const [showErrorModal, setShowErrorModal] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [isWidgetOpen, setIsWidgetOpen] = useState(false);

const widgetRef = useRef<{
open?: () => void;
close?: () => void;
} | null>(null);

const uploadPreset =
process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ||
'dralsawat_preset';

  useEffect(() => {
  if (typeof document === 'undefined') return;

if (showErrorModal || isWidgetOpen) {

  document.body.style.overflowY = 'hidden';
} else {
  document.body.style.overflowY = '';
}
return () => {
  document.body.style.overflowY = '';
};


}, [showErrorModal, isWidgetOpen]);
  const handleTryAgain = () => {

widgetRef.current?.close?.();

setTimeout(() => {
  setIsWidgetOpen(true);
  widgetRef.current?.open?.();
}, 300);

};

  const handleCancel = () => {
  setShowErrorModal(false);
  setIsWidgetOpen(false);


widgetRef.current?.close?.();


};

return ( <div className="space-y-3"> <label className="block text-sm font-bold text-slate-800">
صورة الغلاف </label>
  {value ? (
    <div className="space-y-3">
      <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group">
        <Image
          src={value}
          alt={altValue || 'غلاف المقال'}
          fill
          className="object-cover"
        />

        <button
          type="button"
          onClick={() => {
            onChange('');

            if (onAltChange) {
              onAltChange('');
            }
          }}
          className="absolute top-3 left-3 p-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg transition-transform group-hover:scale-105"
          title="إزالة الصورة"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {onAltChange && (
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">
            النص البديل للصورة:
          </label>

          <input
            type="text"
            value={altValue}
            onChange={(e) => onAltChange(e.target.value)}
            placeholder="وصف مختصر ودقيق لما تحتويه الصورة..."
            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand focus:outline-none"
          />
        </div>
      )}
    </div>
  ) : (
    <CldUploadWidget
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
        resourceType: 'image',
        maxFileSize: 204800,
        clientAllowedFormats: [
          'png',
          'jpeg',
          'jpg',
          'webp',
        ],
        sources: ['local', 'url'],
        folder: 'dralsawat/blogs',

        styles: {
          frame: {
            background: 'rgba(15, 23, 42, 0.1)',
          },
        },
      }}
      onSuccess={(result: any) => {
        setIsWidgetOpen(false);

        if (result?.info?.secure_url) {
          onChange(result.info.secure_url);
        }
      }}
      onClose={() => {
        setIsWidgetOpen(false);
      }}
      onError={(error: any, widgetMethods: any) => {
        setIsWidgetOpen(false);

        widgetMethods?.close?.();

        if (widgetMethods) {
          widgetRef.current = {
            open: widgetMethods.open,
            close: widgetMethods.close,
          };
        }

        setErrorMessage(
          'تعذر رفع الصورة. قد يتجاوز حجمها الحد المسموح به (200 كيلوبايت) أو صيغتها غير مدعومة.'
        );

        setShowErrorModal(true);
      }}
    >
      {({ open, close }) => {
        widgetRef.current = {
          open,
          close,
        };

        return (
          <div
            onClick={() => {
              setIsWidgetOpen(true);
              open?.();
            }}
            className="border-2 border-dashed border-slate-300 hover:border-brand hover:bg-brand/5 bg-slate-50/50 rounded-2xl p-8 text-center cursor-pointer transition-colors flex flex-col items-center justify-center space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <UploadCloud className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-800">
                اضغط هنا لاختيار أو سحب صورة الغلاف
              </p>

              <p className="text-xs text-slate-500">
                (اقصى حجم 200 كيلو بايت)
              </p>

              <p className="text-[0.65rem] text-slate-500">
                (يفضل دقة 3:1)
              </p>
            </div>
          </div>
        );
      }}
    </CldUploadWidget>
  )}

  {isWidgetOpen && (
    <div className="fixed inset-0 z-[99] backdrop-blur-xs pointer-events-none" />
  )}

  {showErrorModal && (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 text-center space-y-5 animate-in zoom-in-95 duration-200">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900">
            تعذر رفع الصورة
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {errorMessage ||
              'قد يتجاوز حجم الصورة الحد المسموح به (200 كيلوبايت) أو صيغتها غير مدعومة. يرجى اختيار صورة أخرى.'}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleTryAgain}
            className="flex-1 py-2.5 px-4 bg-brand hover:bg-brand-dark text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />

            <span>إعادة المحاولة</span>
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  )}
</div>
);
}
