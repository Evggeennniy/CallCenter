import { useRef, useCallback, useState } from "react";

export const useModal = () => {
  const [modalType, setModalType] = useState(null);
  const modalRef = useRef(null);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return {
    modalRef,
    modalType,
    isOpen: !!modalType,
    openModal,
    closeModal,
  };
};
