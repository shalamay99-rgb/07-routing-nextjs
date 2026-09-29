import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import type { MouseEvent } from "react";
import { useEffect } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>,
    document.body,
  );
}
