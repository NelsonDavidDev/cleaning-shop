import { useTranslation } from "react-i18next";

function Header() {
  const [t] = useTranslation();

  return (
    <div className="text-white h-auto grid sm:grid-cols-2 p-10 bg-slate-600">
      <div className="grid grid-rows-2">
        <div className="flex justify-center items-center sm:items-end sm:justify-end">
          <h2 className="text-center text-3xl text-cyan-500">
            {t("header.business-name")}
          </h2>
        </div>
        <div className="flex items-center justify-center sm:justify-end sm:items-start">
          <h1 className="text-xl sm:mr-5">{t("header.description")}</h1>
        </div>
      </div>
      <div className="flex justify-center items-center sm:justify-start">
        <img
          className="col-start-3  max-w-60"
          src="src\assets\cece336d-ff02-4188-9f5b-077eebd861db-removebg-preview.png"
        />
      </div>
    </div>
  );
}

export default Header;
