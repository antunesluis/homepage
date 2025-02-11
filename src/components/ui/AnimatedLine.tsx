'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedLine() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3">
      <motion.div
        className="h-px bg-border"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.65, 0, 0.35, 1], // ease-in-out-cubic
        }}
        style={{
          originX: 0.5,
          width: '100%',
        }}
      />
    </div>
  );
}
