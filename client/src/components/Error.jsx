import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      {/* Main content */}
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="font-bold text-5xl my-2">404 Not Found</h1>
        <p>The page you requested could not be found.</p>
        <NavLink to="/"><button className="bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-green-600 font-bold tracking-widest my-5">Go Back</button></NavLink>
      </div>
    </>
  );
}