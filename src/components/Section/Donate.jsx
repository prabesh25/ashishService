import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Layout/Button";
import { useTranslation } from "react-i18next";


const Donate = () => {
    const { t } = useTranslation();
  

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/account");
  };

  return (
    <div>
      <hr className="h-px bg-gray-300 border-0" />
      <div
        style={{ background: "var(--color-darkBlue)" }}
        className="mx-auto px-6 py-16"
      >
       <h1
  style={{ color: "var(--color-title2)" }}
  className="text-4xl md:text-3xl font-bold text-center text-gray-800 mb-12"
>
  {t("donate.titleLine1")} <br />
  {t("donate.titleLine2")}
</h1>


        {/* Enhanced Donate Button */}
        <div className="flex justify-center mt-8">
          {/* <Button onClick={handleClick}  text={"Donate Now"}  style={"bg-[#00b8db]  cursor-pointer text-white px-8 py-3 rounded-full  transition-all text-lg"}/> */}
          <Button
            onClick={handleClick}
            text={t("donate.btnText")}
            // text="Donate Now"
            styling="bg-[#00b8db] cursor-pointer text-white px-8 py-3 rounded-full text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Donate;
