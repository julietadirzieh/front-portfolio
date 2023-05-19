import { useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsopen] = useState(false);
    const openModal = () => {
        setIsopen(true);
    };
    const onClose = () => {
        setIsopen(false);
    };
    const toggleModal = () => {
        setIsopen(!isOpen);
    };
    return {
        isOpen,
        openModal,
        onClose,
        toggleModal,
    };
};
