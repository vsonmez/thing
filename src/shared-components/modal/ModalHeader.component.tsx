import React, { useCallback } from "react";
import ButtonComponent from "../Button.component";
/**
 * This code snippet defines a functional component called ModalHeader in TypeScript/React. This component takes two props: title (a string) and onClose (a function that takes no arguments and returns nothing).

Inside the component, there is a handleOnClose function defined using the useCallback hook. This function simply calls the onClose prop when invoked.

The component returns JSX code that represents the header of a modal. It consists of a <div> element with some CSS classes, containing an <h3> element to display the title prop, and a <button> element.

The <button> element has an onClick event handler that calls the handleOnClose function when clicked. It also has some CSS classes and attributes for styling.

Overall, this code snippet represents a reusable modal header component with a close button that triggers the onClose function when clicked.
 */
const ModalHeader = ({
  title,
  onClose,
  hideCloseButton,
}: {
  title: string;
  onClose: () => void;
  hideCloseButton?: boolean;
}) => {
  const handleOnClose = useCallback(() => {
    onClose();
  }, [onClose]);
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
      <h3 className="text-xl font-semibold  text-white">{title}</h3>
      {!hideCloseButton && (
        <ButtonComponent
          onClick={handleOnClose}
          className=" rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center border-0"
        >
          <>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </>
        </ButtonComponent>
      )}
    </div>
  );
};

export default React.memo(ModalHeader);
