"use client";

import { usePathname, useRouter } from "next/navigation";
import { IconButton } from "./IconButton";
import RocketLogo from "./RocketLogo";

const PageBanner = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <div className="h-[200px] bg-[#0D0D0D] flex justify-center items-center gap-2 relative">
      <RocketLogo />
      <span className="text-[#4EA8DE] text-[40px] font-[900]">Todo</span>
      <span className="text-[#5E60CE] text-[40px] font-[900]">App</span>
      <IconButton
        onClick={() => {
          if (pathname === "/") {
            push("/create-task");
          }
        }}
        iconPosition="trailing"
        text="Create Task"
        className={`text-white bg-[#1E6F9F] rounded-[8px] text-[14px] h-[52px] font-[700] p-6 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[100%] max-w-xs md:max-w-3xl opacity-${
          pathname === "/" ? "100" : 0
        }`}
        icon="PlusCircle"
      />
    </div>
  );
};

export default PageBanner;
