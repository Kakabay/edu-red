import { IHeaderLink } from "@/typings/header.types";

const FooterExternal = ({ name, path }: IHeaderLink) => {
  return (
    <a
      href={path}
      target="__blank"
      className="inline-block text-SMALL_TEXT text-GRAY hover:text-WHITE transition-all py-1"
    >
      {name}
    </a>
  );
};

export default FooterExternal;
