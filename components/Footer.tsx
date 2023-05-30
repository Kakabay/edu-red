import { title } from "@/settings/title";
import Container from "./Container";
import { footerLinks, footerExternal } from "@/settings/footer";
import FooterExternal from "./FooterExternal";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="footer bg-BLACK py-10 mt-[80px]">
      <Container className="grid grid-cols-HEADER">
        <div className="footer-left flex flex-col gap-6">
          <h6 className="text-SMALL_TITLE text-WHITE font-bold">{title}</h6>
          <div className="flex flex-wrap gap-4">
            {footerExternal.map((footerLink) => (
              <FooterExternal name={footerLink.name} path={footerLink.path} />
            ))}
          </div>
        </div>
        <div className="footer-right">
          <ul className="flex items-center gap-[7vh] justify-end">
            {footerLinks.map((footerLink) => (
              <FooterLink name={footerLink.name} path={footerLink.path} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
