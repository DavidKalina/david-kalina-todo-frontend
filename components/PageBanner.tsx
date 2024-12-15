import React from "react";
import TextWithIcon from "./TextWithIcon";

const PageBanner = () => {
  return (
    <div className="h-[200px] bg-[#0D0D0D] flex justify-center items-center">
      <TextWithIcon size="xl" firstText="Todo" secondText="App" icon="LucideRocket" />
    </div>
  );
};

export default PageBanner;
