import React from 'react';

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
}

export const PaperCard: React.FC<PaperCardProps> = ({ 
  children, 
  className = "", 
}) => {
  return (
    <div className={`relative bg-white p-4 rounded-sm border border-gray-200 shadow-sm ${className}`}>
        {children}
    </div>
  );
};