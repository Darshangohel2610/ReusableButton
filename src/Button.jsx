import React from 'react';
import { Loader } from 'lucide-react';

const Button = ({
  label,
  icon,
  loading = false,
  loadingMessage = 'Loading...',
  showSpinner = false,
  loaderIcon = <Loader size={16} />, // Allow user to pass a custom loader icon
  loadingClassName = '', // Allow user to pass custom Tailwind classes for loading state
  onClick,
  size = 'medium',
  disabled = false,
  className = '', // Allow user to pass custom Tailwind classes
}) => {
  const validSizes = ['small', 'medium', 'large'];
  if (!validSizes.includes(size)) {
    console.warn(
      `Invalid size prop "${size}" provided to Button. Expected one of ${validSizes.join(
        ', '
      )}. Defaulting to "medium".`
    );
  }

  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const iconOnlyClasses = {
    small: 'p-2 text-sm',
    medium: 'p-3 text-base',
    large: 'p-4 text-lg',
  };

  const baseClasses = `
    inline-flex items-center justify-center rounded-lg transition-all
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
  `;

  const isIconOnly = !label && icon;

  return (
    <button
      onClick={!loading && !disabled ? onClick : undefined}
      className={`${baseClasses} ${
        isIconOnly ? iconOnlyClasses[size] : sizeClasses[size]
      } ${loading ? loadingClassName : ''} ${className}`.trim()} // Ensure classes are merged correctly
      disabled={disabled}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          {showSpinner && loaderIcon}
          {loadingMessage}
        </span>
      ) : (
        <>
          {icon && <span className={label ? 'mr-2' : ''}>{icon}</span>}
          {label}
        </>
      )}
    </button>
  );
};


export default Button;
