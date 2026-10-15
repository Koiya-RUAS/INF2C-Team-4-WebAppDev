import { useState } from "react";

function useModal() {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return {
        isOpen,
        openModal,
        closeModal,
    };
}

export default useModal;