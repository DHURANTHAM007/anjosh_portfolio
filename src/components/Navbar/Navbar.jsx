export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-12 py-8">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-black">
          <span className="text-white">A</span>
          <span className="text-red-600">J</span>
        </h1>

        <ul className="hidden md:flex gap-12 text-gray-300">

          <li className="hover:text-red-500 cursor-pointer">
            About
          </li>

          <li className="hover:text-red-500 cursor-pointer">
            Journey
          </li>

          <li className="hover:text-red-500 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-red-500 cursor-pointer">
            Contact
          </li>

        </ul>

      </div>

    </nav>
  );
}