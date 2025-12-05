
function NavBar() {
  return (
    <>
      <div className="h-full w-2/12 grid grid-rows-12 grid-cols-12 border-2 border-red-600">
            <input className="row-start-2 row-end-3 col-start-2 col-end-12 border-2 border-red-600" type="text" placeholder="Search for Movie..." />
            <button className="row-start-3 row-end-4 col-start-2 col-end-12 border-2 border-red-600 hover:bg-gray-200 active:bg-gray-300 cursor-pointer">Search</button>
            <div className="flex justify-center items-center row-start-5 row-end-6 col-start-2 col-end-12 border-2 border-red-600 hover:underline cursor-pointer">Home</div>
            <div className="flex justify-center items-center row-start-7 row-end-8 col-start-2 col-end-12 border-2 border-red-600 hover:underline cursor-pointer">Favorites</div>
            <div className="flex justify-center items-center row-start-9 row-end-10 col-start-2 col-end-12 border-2 border-red-600 hover:underline cursor-pointer">Info</div>
      </div>
    </>
  );
}

export default NavBar;
