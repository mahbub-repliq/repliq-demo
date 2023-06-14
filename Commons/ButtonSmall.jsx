function ButtonSmall({children}) {
  return (
    <div className="my-2 md:my-4">
      <button className="px-3 py-1 text-xs uppercase bg-primary hover:bg-secondary rounded text-base-100 transition-all ease-in-out duration-500">
        {children}
      </button>
    </div>
  );
}

export default ButtonSmall;
