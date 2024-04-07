import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer flex justify-between px-4 py-2 bg-green-300">
        <div>
          <h1><span className="text-yellow-500 font-bold text-xl">get</span><span className="text-green-800 font-bold text-xl">Password</span></h1>
        </div>
        <div>
          <span>&copy; </span>
          <span>{year}</span>
          <Link to="https://github.com/Sabit-Hasan" className="text-yellow-500 hover:text-black"> <a href="https://github.com/Sabit-Hasan" target="_blank">Md.Sabit Hasan</a></Link>
          . All rights reserved.
        </div>
      </div>
    </>
  );
}