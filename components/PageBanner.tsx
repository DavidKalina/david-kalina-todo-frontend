"use client";

import { usePathname, useRouter } from "next/navigation";
import { IconButton } from "./IconButton";
import RocketLogo from "./RocketLogo";

const PageBanner = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const isHomePage = pathname === "/";

  return (
    <div className="h-[200px] bg-[#0D0D0D] flex justify-center items-center gap-2 relative">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => {
          if (!isHomePage) {
            push("/");
          }
        }}
      >
        <RocketLogo />
        <span className="text-[#4EA8DE] text-[40px] font-[900]">Todo</span>
        <span className="text-[#5E60CE] text-[40px] font-[900]">App</span>

        {/* Button wrapper to maintain layout */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-xs md:max-w-3xl">
          {isHomePage && (
            <IconButton
              onClick={() => push("/create-task")}
              iconPosition="trailing"
              text="Create Task"
              className="text-white bg-[#1E6F9F] rounded-[8px] text-[14px] h-[52px] font-[700] p-6 w-full"
              icon="PlusCircle"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
