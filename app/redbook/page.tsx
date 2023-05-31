import Container from "@/components/Container";
import MainBlock from "@/components/MainBlock";

const RedBook = () => {
  return(
    <main>
      <Container className="flex flex-col gap-[48px]">
        <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">
          Red book
        </h2>
          <MainBlock link="/redbook/families" imageLink="/red-book-1.jpg" text="The Red Data Book of Turkmenistan :
          Plants and Fungi"/>
          <MainBlock link="/redbook/families" imageLink="/red-book-2.jpg" text="The Red Data Book of Turkmenistan :
          Invertebrate and Vertebrate Animals"/>
      </Container>
    </main>
  );
};

export default RedBook;
