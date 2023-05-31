import Container from "@/components/Container";
import SecondaryBlock from "@/components/SecondaryBlock";
import Link from "next/link";

const Families = () => {
  return(
    <main>
      <Container className="flex flex-col gap-[48px]">
       <div className="red-book-nav">
            <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">
                Red book
            </h2>
            <h3 className="red-book-subnav text-GRAY text-SMALL_TEXT">
                <Link href={"/redbook"}>Red book</Link> - <span className="font-bold text-BLACK">The Red Data Book of Turkmenistan : Plants and Fungi</span>  
            </h3>
       </div>
        <div className="red-book-families-content flex justify-between gap-[32px]">
        <SecondaryBlock link="/" imageLink="/plant-family-1.jpg" text="Magnoliopsida (Dicotyledons)"/>
          <SecondaryBlock link="/" imageLink="/plant-family-2.jpg" text="Liliopsida, Monocotyledones "/>
        </div>
      </Container>
    </main>
  );
};

export default Families;
