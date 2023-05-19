import { motion, AnimatePresence } from "framer-motion";
import ModalContainer from "./ModalContainer/ModalContainer";

const overlayVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.2,
      delay: 0,
    },
  },
  hidden: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      duration: 0.2,
      delay: 0,
    },
  },
};

const Modal = ({ isOpen, onClose, title, children, containerStyles }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          onClick={onClose}
          className="z-50 flex justify-center items-center h-full w-full overflow-x-hidden overflow-y-auto scrollbar-hide fixed inset-0 bg-stone-600 bg-opacity-75 shadow"
        >
          <motion.div
            className="relative mx-3% md:mx-0 h-5/6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <ModalContainer className={containerStyles}>
              {title && (
                <h4 className="text-bordo mt-4 text-2xl font-bold uppercase mx-auto">
                  {title}
                </h4>
              )}
              {onClose && (
                <button
                  className="text-lightGray font-bold text-2xl rounded-md text-center absolute right-0 px-3 py-1"
                  onClick={onClose}
                  type="button"
                >
                  X
                </button>
              )}
              {children}
            </ModalContainer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
