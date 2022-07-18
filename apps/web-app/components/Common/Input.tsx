import React from 'react';

type TInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export const BaseInput: React.FC<TInputProps> = (props) => {
  return (
    <input
      className="bg-empty border-none outline-none placeholder-slate-400 px-2 text-base font-weight-bold bg-none w-full"
      {...props}
    />
  );
};

export const Input: React.FC<TInputProps> = ({ children, ...props }) => {
  return (
    <div className="input-box flex flex-row items-center p-2 w-full h-11">
      {children}
      <BaseInput {...props} />
    </div>
  );
};

export default Input;
