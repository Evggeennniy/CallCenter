import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const backdropRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickOutside = (e) => {
    if (e.target === backdropRef.current) {
      setIsOpen(false);
    }
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        ref={backdropRef}
        onClick={handleClickOutside}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content border-0 rounded-3 p-0 m-0">
            <div className="modal-body p-0 m-0 position-relative">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-2"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              ></button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
});

export default Modal;
