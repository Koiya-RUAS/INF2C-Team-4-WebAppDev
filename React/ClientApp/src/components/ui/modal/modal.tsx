import {
    useEffect,
    useRef,
    useId,
    type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import "./modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    eyebrow?: string;
    children: ReactNode;
}

function Modal({
    isOpen,
    onClose,
    title,
    eyebrow,
    children,
}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousFocus = useRef<HTMLElement | null>(null);
    const titleId = useId();

    useEffect(() => {
        if (!isOpen) return;
        previousFocus.current = document.activeElement as HTMLElement;
        document.body.style.overflow = "hidden";

        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        focusableElements?.[0]?.focus();

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }

            if (event.key !== "Tab" || !modalRef.current) return;

            const elements = Array.from(
                modalRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
                )
            );
            if (elements.length === 0) return;

            const firstElement = elements[0];
            const lastElement = elements[elements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }

            if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }

        }
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
            previousFocus.current?.focus();
        };

    }, [isOpen, onClose]);

    if (!isOpen) {return null;}

    return createPortal(
        <div className="modal-overlay" onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
                onClose();
            }
        }}>
            <div ref={modalRef} className="modal-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}>
                <header className="modal-header">
                    <div className="modal-title">
                        {eyebrow && (
                            <p className="modal-eyebrow">{eyebrow}</p>
                        )}
                        <h2 id={titleId} className="modal-title">
                            {title}
                        </h2>
                    </div>

                    <button type="button" className="modal-close" onClick={onClose} aria-label="Modal sluiten">
                        &times;
                    </button>
                </header>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}

export default Modal;