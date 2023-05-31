import Link from "next/link";
import Container from "@/components/Container";
import ItemCard from "@/components/ItemCard";
import { plantRedbook } from "@/data/redbooks";
import { getFamilyById } from "@/utils/getById";

const FamilyList = ({ params }: { params: { family_id: string } }) => {
  const { family_id } = params;

  const items = getFamilyById(family_id, plantRedbook.families).items;
  return (
    <main>
      <Container className="flex flex-col gap-[48px]">
        <div className="red-book-nav flex flex-col gap-[8px]">
          <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">
            Red book
          </h2>
          <h3 className="red-book-subnav text-GRAY text-SMALL_TEXT">
            <Link href={"/redbook"}>Red book</Link> {" | "}
            <Link href={"/redbook/families"}>
              The Red Data Book of Turkmenistan : Plants and Fungi
            </Link>{" "}
            {" | "}
            <span className="font-bold text-BLACK">
              The Red Data Book of Turkmenistan : Plants and Fungi
            </span>
          </h3>
        </div>

        <section className="red-book-item-list grid grid-cols-3 gap-x-[24px] gap-y-[40px] content-center">
          {plantRedbook
            ? items.map((item) => (
                <ItemCard
                  type="redbook/plants"
                  name={item.name}
                  img={item.img}
                  key={item.id}
                  familyId={item.familyId}
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

export default FamilyList;
