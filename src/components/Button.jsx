import React from 'react';

const Button = ({ onClick, variant, size, children, className: customClassName, ...props }) => {
  let className = 'px-4 py-2 rounded '; // Base classes

  // Variant styles
  if (variant === 'outline') {
    className += 'border border-gray-500 text-gray-700 hover:bg-gray-100';
  } else {
    className += 'bg-blue-500 text-white hover:bg-blue-600'; // Default
  }

  // Size styles
  if (size === 'icon') {
    className = 'p-2 rounded-full';
  }

  // Combine with any custom classes
  className = `${className} ${customClassName || ''}`;

  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
