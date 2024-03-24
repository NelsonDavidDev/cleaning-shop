function Header() {
  return (
    <div className="text-white h-80  grid grid-cols-4 p-10">
      <div className="col-start-2 grid grid-rows-2" >
        <h2 className="text-center text-3xl inline-block align-bottom pt-20 text-cyan-500">Escobas y Traperos la Unica</h2>
        <h1 className="text-center text-xl">Venta de escobas, traperos y todo tipo de elementos de limpieza.</h1>
      </div>
      <img className="col-start-3  max-w-60" src="src\assets\cece336d-ff02-4188-9f5b-077eebd861db-removebg-preview.png"/>
    </div>
  );
}

export default Header;