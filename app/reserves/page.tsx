import Container from "@/components/Container";
import ItemCard from "@/components/ItemCard";
import { resData } from "@/data/redbooks";

const Reserves = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[48px]">
        <h2 className="reserves-title font-bold text-BIT_TITLE text-BLACK">
          National reserves
        </h2>
        <section className="red-book-item-list grid grid-cols-3 gap-x-[24px] gap-y-[40px] content-center">
          {resData
            ? resData.items.map((item) => (
                <ItemCard
                  type="reserves"
                  name={item.name}
                  img={item.img}
                  key={item.id}
                  id={item.id}
                  text={item.text}
                />
              ))
            : "no items"}
        </section>
      </Container>
    </main>
  );
};

export default Reserves;
