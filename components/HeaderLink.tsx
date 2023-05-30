"use client";
import { IHeaderLink } from "@/typings/header.types";
import { comparePathname } from "@/utils/comparePathname";
import colors from "@/variables/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = ({ name, path }: IHeaderLink) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className="text-TEXT font-normal text-GRAY transition-all py-10"
      style={
        comparePathname(path, pathname)
          ? { color: colors.GREEN, fontWeight: "bold" }
          : {}
      }
    >
      {name}
    </Link>
  );
};

export default HeaderLink;
