import React from 'react';
import joinclass from 'joinclass';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
const FlexCenter: React.FC<DivProps> = ({ className, ...props }) => {
  return (
    <div
      className={joinclass('flex justify-center items-center', className)}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default FlexCenter;
