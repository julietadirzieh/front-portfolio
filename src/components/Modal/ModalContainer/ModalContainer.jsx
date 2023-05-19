const ModalContainer = ({ className, children }) => {
  return (
    <div
      className={`border-0 rounded-lg shadow-2xl top-20% md:top-0% relative flex flex-col w-full h-auto md:h-full bg-black ${className}`}
    >
      {children}
    </div>
  );
};

export default ModalContainer;
