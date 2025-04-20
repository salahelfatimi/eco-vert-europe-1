export default function Loading() {
  return (
    <>
      <div
        className={`fixed  inset-0 flex items-center justify-center   duration-1000 transition z-50  min-h-screen `}
      >
        <span className={`font-extrabold text-center items-center gap-3 md:text-5xl text-4xl animate-bounce flex flex-col lg:flex-row justify-center  `}>
          Bienvenue à
          <span className=" text-primary   ">
            Eco Vert Europé
          </span>
        </span>
      </div>
    </>
  );
}
