// ClientNav.tsx
"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const NavToHomePage = () => {
  const { push } = useRouter();

  return <ArrowLeft className="text-white cursor-pointer" onClick={() => push("/")} />;
};

export default NavToHomePage;
