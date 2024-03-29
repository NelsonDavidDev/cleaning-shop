import { Link } from "wouter";
import { auth } from "./../firebase/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function NavBar({ setLogInModal, setRegisterModal, setUser, user }) {
  const [t, i18n] = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  function currentUser() {
    console.log(auth.currentUser);
  }

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <>
      <nav className="dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="src\assets\cece336d-ff02-4188-9f5b-077eebd861db-removebg-preview.png"
              className="h-8"
              alt="La Unica Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              La Unica
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href={"/"}
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              {t("header.business-number")}
            </Link>

            {!user ? (
              <>
                <button
                  onClick={() => setRegisterModal(true)}
                  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Register
                </button>
                <button
                  onClick={() => setLogInModal(true)}
                  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                >
                  LogIn
                </button>
              </>
            ) : (
              <>
                <button className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                  Profile
                </button>
                <button
                  onClick={() => handleLogout()}
                  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                >
                  LogOut
                </button>
              </>
            )}
            
              <div className="relative">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Ln
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg">
                    <button onClick={() => {i18n.changeLanguage("es"); setMenuOpen(false)}} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                      Es
                    </button>
                    <button onClick={() => {i18n.changeLanguage("en"); setMenuOpen(false)}} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                      En
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  href={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Promos
                </Link>
              </li>
              <li>
                <button
                  onClick={() => currentUser()}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Free Shipping
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
