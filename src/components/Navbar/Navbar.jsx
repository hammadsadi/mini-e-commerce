import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="bg-white border-b">
      <div className="mx-auto container px-2 md:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <h2 className="text-4xl font-bold">My Shop</h2>
            </Link>
          </div>

          <div className="">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {user ? (
                <>
                  {user?.photoURL ? (
                    <img
                      title={user?.displayName}
                      src={`${user.photoURL}`}
                      alt=""
                      className="w-9 rounded-full h-9"
                    />
                  ) : (
                    <img
                      title={user?.displayName}
                      src={"https://i.ibb.co/KsN4VwJ/sadi-avatr.jpg"}
                      alt=""
                      className="w-9 rounded-full h-9"
                    />
                  )}
                </>
              ) : (
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
