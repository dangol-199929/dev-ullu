"use client";
import { FC, HTMLAttributes, forwardRef } from "react";
import { Button } from "antd";
import type { MenuProps } from "antd";
// interface DefaultButtonProps extends HTMLAttributes<HTMLButtonElement> {}

// const DefaultButton = forwardRef<DefaultButtonProps, HTMLButtonElement>(
//     ({
//   children,
// }) => {
//   return (
//     <>
//       <Button className="text-sm text-slate-50" type="text" block>
//         {children}
//       </Button>
//     </>
//   );
// });

interface DefaultButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  test?: any;
}

const DefaultButton = forwardRef<HTMLButtonElement, DefaultButtonProps>(
  ({ test, text, className, children, ...props }, ref) => {
    return (
      <>
        <Button
          onClick={test}
          className={`text-lg hover:!text-orange-500 font-bold text-slate-900 dark:text-slate-50`}
          type="text"
          block
        >
          {children} {text}
        </Button>
      </>
    );
  }
);
DefaultButton.displayName = "DefaultButton";
export default DefaultButton;
