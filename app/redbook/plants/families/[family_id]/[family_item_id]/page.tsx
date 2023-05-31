import Container from "@/components/Container";
import Post from "@/components/Post";
import { plantRedbook } from "@/data/redbooks";
import { getFamilyById, getItemById } from "@/utils/getById";
import Link from "next/link";

interface IProps {
  params: {
    family_item_id: string;
    family_id: string;
  };
}

const FamilyItem = ({ params }: IProps) => {
  const { family_item_id, family_id } = params;
  const family = getFamilyById(family_id, plantRedbook.families).items;

  const item = getItemById(family_item_id, family);

  return (
    <main>
      <Container className="flex flex-col gap-[48px]">
        <div className="red-book-nav flex flex-col gap-[8px]">
          <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">
            {item.name}
          </h2>
          {/* <h3 className="red-book-subnav text-GRAY text-SMALL_TEXT">
            <Link href={"/redbook"}>Red book</Link> {" | "}
            <Link href={"/redbook/families"}>
              The Red Data Book of Turkmenistan : Plants and Fungi
            </Link>
            {" | "}
            <Link href={`/redbook/families/${family_id}`}>
              Liliopsida, Monocotyledones
            </Link>
            {" | "}
            <span className="font-bold text-BLACK">{item.name}</span>
          </h3> */}
        </div>

        <Post image={item.img} text={item.text} name={item.name} />
      </Container>
    </main>
  );
};

export default FamilyItem;
