const Loader = () => {
  return (
    <section className="text-center flex w-full h-full my-0 bg-white">
      <div
        role="status"
        className="mt-30 md:mt-28 flex flex-col align-middle justify-center content-center mx-auto"
      >
        <div className="mb-4 mx-auto">
          <img
            src="/icons/favicon.png"
            alt="text-logo"
            className="h-24 w-24 mx-auto mt-10 animate-spin"
          />
        </div>
        <h2 className="text-xl text-black mb-36">Cargando...</h2>
      </div>
    </section>
  );
};

export default Loader;
