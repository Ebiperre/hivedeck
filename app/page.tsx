// pages/index.tsx
'use client';
import React, { useState } from 'react';
import Tiptap from '@/components/Tiptap';

const Home: React.FC = () => {
  const [content, setContent] = useState('<p>This is the title</p>');

  return (
    <div className='container mx-auto p-4'>
      <Tiptap description={content} onChange={setContent} />
    </div>
  );
};

export default Home;
