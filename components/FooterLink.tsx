"use client";
import { IHeaderLink } from "@/typings/header.types";
import { comparePathname } from "@/utils/comparePathname";
import colors from "@/variables/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLink = ({ name, path }: IHeaderLink) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className="text-TEXT font-normal text-GRAY transition-all py-10 relative group hover:text-WHITE"
      style={
        comparePathname(path, pathname)
          ? { color: colors.WHITE, fontWeight: "bold" }
          : {}
      }
    >
      {name}
      <span className="absolute top-8 right-0 h-[1px] w-0 bg-WHITE group-hover:w-full transition-all"></span>
      <span className="absolute bottom-8 left-0 h-[1px] w-0 bg-WHITE group-hover:w-full transition-all"></span>
    </Link>
  );
};

export default FooterLink;
