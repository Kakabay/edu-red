import Container from "@/components/Container";
import ItemCard from "@/components/ItemCard";
import { plantRedbook, volunteeringData } from "@/data/redbooks";
import { FunctionComponent } from "react";

interface VolunteeringProps {}

const Volunteering: FunctionComponent<VolunteeringProps> = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[48px]">
        <h2 className="volunteering-title font-bold text-BIT_TITLE text-BLACK">
          Volunteering
        </h2>
        <section className="red-book-item-list grid grid-cols-3 gap-x-[24px] gap-y-[40px] content-center">
          {volunteeringData
            ? volunteeringData.items.map((item) => (
                <ItemCard
                  name={item.name}
                  img={item.img}
                  key={item.id}
                  org={item.org}
                  id={item.id}
                  text={item.text}
                  type="volunteering"
                />
              ))
            : "no items"}
        </section>
      </Container>
    </main>
  );
};

export default Volunteering;
