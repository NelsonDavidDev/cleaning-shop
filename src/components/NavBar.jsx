import {Link} from "wouter"

function NavBar({setLogInModal, setRegisterModal}) {

  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href={ '/' }
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
          <Link href={ '/' }
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (+57) 000 000 00 00
            </Link>

            {/* {!context.login ? ( */}
              <>
                <button onClick={()=> setRegisterModal(true)} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                  Register
                </button>
                <button
                  onClick={() => setLogInModal(true)}
                  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                >
                  LogIn
                </button>
              </>
             {/*) : (
              <>
                <button className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                  Register
                </button>
                <button
                  
                  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                >
                  LogIn
                </button>
              </>
            )} */}
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
                  href={'/'}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Promos
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Free Shipping
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
