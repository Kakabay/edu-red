import Container from "./Container";

const Header = () => {
  return (
    <header className="header">
      <Container className="grid grid-cols-HEADER gap-6">
        <div className="header-left">
          <h6 className="text-SMALL_TITLE text-">Edu Red.</h6>
        </div>
        <div className="header-right"></div>
      </Container>
    </header>
  );
};

export default Header;
