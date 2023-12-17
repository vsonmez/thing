import React from "react";
import ModalHeaderComponent from "./ModalHeader.component";
import ModalFooterComponent from "./ModalFooter.component";

const Modal = ({
  title,
  children,
  showFooter,
  onClose,
}: {
  title: string;
  children: JSX.Element;
  showFooter?: boolean;
  onClose: () => void;
}) => {
  return (
    <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-2xl h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full flex flex-col">
          <ModalHeaderComponent title={title} onClose={onClose}></ModalHeaderComponent>
          <div className="p-4 space-y-4 overflow-auto h-full">{children}</div>
          {showFooter && <ModalFooterComponent></ModalFooterComponent>}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
