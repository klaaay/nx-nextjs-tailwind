import React from 'react';
import joinclass from 'joinclass';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  second?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  second,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={joinclass(
        'px-5 py-3 rounded-md bg-main hover:bg-blue-500 focus:ring-4 focus:ring-blue-300',
        second && 'second',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
