import React from "react";

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className, isFullWidth }) => {
  return (
    <div className={`inline-flex ${className ? className : ""}`}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) && typeof child.type !== "string"
          ? React.cloneElement(child, {
              type: child.props.type || "button",
              ...child.props,
              className: `
                ${isFullWidth ? "w-full" : ""}
                ${child.props.className ? child.props.className : ""}
                rounded-none
                ${index !== React.Children.count(children) - 1 ? "border-r-0" : ""}
                ${index === 0 ? "rounded-l" : ""}
                ${index === React.Children.count(children) - 1 ? "rounded-r" : ""}
              `,
            })
          : child,
      )}
    </div>
  );
};

export default ButtonGroup;
