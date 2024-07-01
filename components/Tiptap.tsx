'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Image from '@tiptap/extension-image';
import Heading from '@tiptap/extension-heading';
import CharacterCount from '@tiptap/extension-character-count';
import Toolbar from './Toolbar';
import { useState } from 'react';

const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
      }),
      Link,
      Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      BulletList,
      OrderedList,
      CharacterCount.configure({
        limit: 1000,
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: 'rounded-md border min-h-[150px] border-input p-4',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  const characterCount = editor?.storage.characterCount.characters() ?? 0;

  return (
    <div className="flex flex-col justify-stretch min-h-[250px] relative">
      <input
        type="text"
        placeholder="This is the title"
        className="text-2xl font-bold border-b-2 border-black focus:outline-none"
      />
      <Toolbar editor={editor} />
      <EditorContent editor={editor} style={{ whiteSpace: 'pre-line' }} />
      <div className="mt-2 text-right text-gray-600">
        Character Count: {characterCount} / 1000
      </div>
      
    </div>
  );
};

export default Tiptap;
