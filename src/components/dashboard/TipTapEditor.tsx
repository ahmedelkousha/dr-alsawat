'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Minus,
  RemoveFormatting,
} from 'lucide-react';

interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-brand underline font-semibold',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-2xl my-4 max-w-full shadow-sm',
        },
      }),
      Placeholder.configure({
        placeholder: 'ابدأ بكتابة محتوى المقال الطبي هنا... استخدم العناوين H2 و H3 لتنظيم المقال لمحركات البحث.',
      }),
      Paragraph.configure({
      HTMLAttributes: {
        class: 'sm:text-base text-sm',
      },
    }),
    ],
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-slate max-w-none focus:outline-none min-h-[300px] p-4 text-slate-800 text-base leading-relaxed',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return (
      <div className="h-72 bg-slate-50 border border-slate-200 rounded-2xl animate-pulse" />
    );
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('أدخل رابط URL:', previousUrl);

    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="border border-slate-200 rounded-2xl bg-white focus-within:ring-2 focus-within:ring-brand focus-within:border-brand transition-all">
      {/* Editor Toolbar */}
      <div className="sticky top-0 z-10 flex flex-wrap items-center gap-1 p-2 border-b border-slate-100 bg-slate-50 rounded-t-2xl text-slate-700">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-lg text-xs font-bold transition-colors ${
            editor.isActive('bold')
              ? 'bg-navy text-white'
              : 'hover:bg-slate-200'
          }`}
          title="عريض (Bold)"
        >
          <Bold className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-lg text-xs font-bold transition-colors ${
            editor.isActive('italic')
              ? 'bg-navy text-white'
              : 'hover:bg-slate-200'
          }`}
          title="مائل (Italic)"
        >
          <Italic className="w-4 h-4" />
        </button>

        <span className="w-px h-5 bg-slate-300 mx-1" />

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`p-2 rounded-lg text-xs font-bold transition-colors ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-navy text-white'
              : 'hover:bg-slate-200'
          }`}
          title="عنوان رئيسي (H2)"
        >
          <Heading2 className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`p-2 rounded-lg text-xs font-bold transition-colors ${
            editor.isActive('heading', { level: 3 })
              ? 'bg-navy text-white'
              : 'hover:bg-slate-200'
          }`}
          title="عنوان فرعي (H3)"
        >
          <Heading3 className="w-4 h-4" />
        </button>

        <span className="w-px h-5 bg-slate-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-lg text-xs font-bold transition-colors ${
            editor.isActive('bulletList')
              ? 'bg-navy text-white'
              : 'hover:bg-slate-200'
          }`}
          title="قائمة نقطية"
        >
          <List className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded-lg text-xs font-bold transition-colors ${
            editor.isActive('orderedList')
              ? 'bg-navy text-white'
              : 'hover:bg-slate-200'
          }`}
          title="قائمة رقمية"
        >
          <ListOrdered className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded-lg text-xs font-bold transition-colors ${
            editor.isActive('blockquote')
              ? 'bg-navy text-white'
              : 'hover:bg-slate-200'
          }`}
          title="اقتباس / تنبيه"
        >
          <Quote className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded-lg text-xs hover:bg-slate-200 transition-colors"
          title="خط فاصل"
        >
          <Minus className="w-4 h-4" />
        </button>

        <span className="w-px h-5 bg-slate-300 mx-1" />

        <button
          type="button"
          onClick={setLink}
          className={`p-2 rounded-lg text-xs font-bold transition-colors ${
            editor.isActive('link')
              ? 'bg-navy text-white'
              : 'hover:bg-slate-200'
          }`}
          title="إضافة رابط"
        >
          <LinkIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          className="p-2 rounded-lg text-xs hover:bg-slate-200 transition-colors text-slate-500"
          title="إزالة التنسيق"
        >
          <RemoveFormatting className="w-4 h-4" />
        </button>

        <div className="mr-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="p-2 rounded-lg text-xs hover:bg-slate-200 disabled:opacity-30"
            title="تراجع"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="p-2 rounded-lg text-xs hover:bg-slate-200 disabled:opacity-30"
            title="إعادة"
          >
            <Redo className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} dir="rtl" />
    </div>
  );
}
