import { Link } from "wouter";
import { auth } from "./../firebase/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useState } from "react";


function NavBar({ setUser, user, setRegisterModal, setLogInModal, setCartModal, cartModal, loginModal, registerModal }) {
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
              {t("header.business-name")}
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
                  {t("auth.create-account")}
                </button>
                <button
                  onClick={() => setLogInModal(true)}
                  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {t("auth.logIn")}
                </button>
              </>
            ) : (
              <>
                <button className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                  {t("auth.profile")}
                </button>
                <button
                  onClick={() => handleLogout()}
                  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {t("auth.logOut")}
                </button>
              </>
            )}

            <div className={cartModal||loginModal||registerModal ? ("relative"): ("")}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setCartModal(!cartModal)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
  <path  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
</svg>

              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("es");
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  >
                    Es
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  >
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
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  {t("nav.categories")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  {t("nav.promos")}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => currentUser()}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  {t("nav.free-shipping")}
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
