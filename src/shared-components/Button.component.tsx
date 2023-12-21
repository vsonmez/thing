import React, { MouseEventHandler, useCallback } from "react";
import useIsBusy from "../store/hooks/global/use-is-busy.hook";
/**
 * It takes in several props: onClick, children, and className. 
 * 
 * The onClick prop is a function that handles the button click event. 
 * 
 * The children prop is the content of the button. 
 * 
 * The className prop is an optional CSS class name for styling.

Inside the component, it creates a classes variable by concatenating the className prop with some default CSS classes. It also defines an onClickHandler function that calls the onClick prop when the button is clicked.

Finally, the component renders a button element with the onClickHandler function and the css classes as props, and the children as its content.
 */
const Button = ({
  onClick,
  children,
  className,
  disabled,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
  className?: string;
  disabled?: boolean;
}) => {
  const { isBusy } = useIsBusy();
  const classes = `border rounded px-1 disabled:bg-gray-300 disabled:text-gray-800 ${className}`;
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      onClick(event);
    },
    [onClick]
  );

  return (
    <button onClick={onClickHandler} className={classes} disabled={disabled || isBusy}>
      {children}
    </button>
  );
};

export default React.memo(Button);
