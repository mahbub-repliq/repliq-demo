function LargeButton({children}) {
    return (
      <div className="">
        <button className="px-5 py-2 text-md font-semibold uppercase bg-primary hover:bg-secondary rounded text-base-100 transition-all ease-in-out duration-500">
          {children}
        </button>
      </div>
    );
  }
  
  export default LargeButton;