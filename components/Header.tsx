import { headerLinks } from "@/settings/header";
import Container from "./Container";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import { title } from "@/settings/title";

const Header = () => {
  return (
    <header className="header mb-[40px]">
      <Container className="grid grid-cols-HEADER gap-6 items-center">
        <div className="header-left">
          <Link href={"/"}>
            <h6 className="text-SMALL_TITLE text-BLACK justify-self-start font-bold inline-block">
              {title}
            </h6>
          </Link>
        </div>
        <div className="header-right">
          <ul className="flex items-center gap-[7vh] justify-end">
            {headerLinks.map((header) => (
              <HeaderLink name={header.name} path={header.path} />
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
