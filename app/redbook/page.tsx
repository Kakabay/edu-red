// Components
import Container from "@/components/Container";
import MainBlock from "@/components/MainBlock";
// Data
import { plantRedbook, animalRedbook } from "@/data/redbooks";

const RedBook = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[48px]">
        <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">
          Red book
        </h2>
        <MainBlock
          link="/redbook/plants/families"
          imageLink={plantRedbook.img}
          text={plantRedbook.name}
        />
        <MainBlock
          link="/redbook/animals/families"
          imageLink={animalRedbook.img}
          text={animalRedbook.name}
        />
      </Container>
    </main>
  );
};

export default RedBook;
