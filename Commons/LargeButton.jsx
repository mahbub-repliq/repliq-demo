function LargeButton({children}) {
    return (
      <div className="">
        <button className="px-3 md:px-5 py-1 md:py-2 text-md md:font-semibold uppercase bg-primary hover:bg-secondary rounded text-base-100 transition-all ease-in-out duration-500">
          {children}
        </button>
      </div>
    );
  }
  
  export default LargeButton;