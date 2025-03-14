'use client';

import React, { useState, ReactNode } from 'react';

export default function InteractiveCard({ children }: { children: ReactNode }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div 
      className={`${isHover ? 'shadow-2xl bg-neutral-200' : 'shadow-lg bg-white'} rounded-lg transition-all duration-300 w-1/5 h-[300px] text-black`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </div>
  );
}