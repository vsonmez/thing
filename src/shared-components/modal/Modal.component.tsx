import React from "react";
import ModalHeaderComponent from "./ModalHeader.component";
import ModalFooterComponent from "./ModalFooter.component";
/**
 * This code defines a Modal component in TypeScript and JSX. The component takes in several props: title (a string), children (a JSX element), showFooter (an optional boolean), and onClose (a function that takes no arguments and returns nothing).

The component renders a modal dialog with a header, content area, and footer. The title prop is used in the ModalHeaderComponent to display the title. The children prop is rendered in a scrollable area within the modal. If showFooter is true, the ModalFooterComponent is rendered at the bottom of the modal.
 */
const Modal = ({
  title,
  children,
  showFooter,
  onClose,
  hideCloseButton,
}: {
  title: string;
  children: JSX.Element;
  showFooter?: boolean;
  onClose?: () => void;
  hideCloseButton?: boolean;
}) => {
  return (
    <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0  max-h-full backdrop-blur-sm">
      <div className="relative p-4 w-full max-w-2xl h-full">
        <div className="relative  rounded-lg shadow bg-gray-700 max-h-full flex flex-col">
          <ModalHeaderComponent
            title={title}
            onClose={onClose}
            hideCloseButton={hideCloseButton}
          ></ModalHeaderComponent>
          <div className="p-4 space-y-4 overflow-auto h-full">{children}</div>
          {showFooter && <ModalFooterComponent></ModalFooterComponent>}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
