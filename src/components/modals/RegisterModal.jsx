import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../../firebase/config";
import { useState } from "react";

function RegisterModal({setRegisterModal, setLogInModal}) {

  const [dataRegister, setDataRegister] = useState({
    email: '',
    password: ''
  });
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataRegister({
      ...dataRegister,
      [name]: value
    });
  };

  function googleRegister(){
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    setRegisterModal(false)
   
  }).catch((error) => {
    console.log(error)
  });
  }

  async function hadleRegister() {
    try {
      await createUserWithEmailAndPassword(auth, dataRegister.email, dataRegister.password);
      setRegisterModal(false)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
      onClick={() => {
        setRegisterModal(false);
      }}
    >
      <div className="bg-transparent p-5 rounded flex flex-col justify-center items-center gap-5 h-96 ">
        <section className="h-screen bg-slate-500 rounded-xl ">
          <div
            className="h-full rounded p-10 bg-black-900"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="">
                  <div className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="mb-0 me-4 text-lg text-white font-bold">
                      Register
                    </p>

                    <button
                    
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                      <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path><path fill="#FAFAFA" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"></path></svg>
                      </span>
                    </button>

                    <button
                    onClick={() => googleRegister()}
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                      <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                      </span>
                    </button>

                    
                  </div>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                      Or
                    </p>
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 bordered border-2 border-black"
                      onChange={handleInputChange}
                      value={dataRegister.email}
                      name="email"
                      id="email"
                    />
                    <label className="-translate-y-[1.8rem] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[1.15rem] motion-reduce:transition-none dark:text-white dark:text-primary">
                      Email address
                    </label>
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded bordered border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      onChange={handleInputChange}
                      value={dataRegister.password}
                      name="password"
                      id="password"
                    />
                    <label className="-translate-y-[1.8rem] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out  scale-[0.8]  peer-data-[twe-input-state-active]:-translate-y-[1.15rem] motion-reduce:transition-none dark:text-white dark:text-primary">
                      Password
                    </label>
                  </div>

                  <div className="mb-6 flex items-center justify-between">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                      <input
                        className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                        type="checkbox"
                        value=""
                        id="exampleCheck2"
                      />
                      <label className="inline-block ps-[0.15rem] hover:cursor-pointer">
                        Remember me
                      </label>
                    </div>
                    <a className="ml-10" href="#!">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center lg:text-left">
                    <button className="inline-block ml-20 bg-green-600 rounded-md hover:bg-green-400 p-1 m-auto w-32" onClick={() => {hadleRegister()}}>
                      Register
                    </button>

                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                      Do have an account?
                      <button
                        onClick={()=> {setLogInModal(true); setRegisterModal(false); }}
                        className="ml-10 text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                      >
                        Login
                      </button>
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RegisterModal