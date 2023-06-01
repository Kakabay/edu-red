import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Post from "@/components/Post";
import { plantRedbook, volunteeringData } from "@/data/redbooks";
import { getItemById } from "@/utils/getById";
import Link from "next/link";

interface IProps {
  params: {
    volunteering_id: string;
  };
}

const VolunteeringItem = ({ params }: IProps) => {
  const { volunteering_id } = params;

  const item = getItemById(volunteering_id, volunteeringData.items);

  return (
    <main>
      <Container className="flex flex-col gap-[80px]">
        <div className="wrapper flex flex-col gap-[40px]">
          <div className="red-book-nav flex flex-col gap-[8px]">
            <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">
              {item.name}
            </h2>
            {/* <h3 className="red-book-subnav text-GRAY text-SMALL_TEXT">
              <Link href={"/volunteering"}>Volunteering</Link> {" | "}
              <span className="font-bold text-BLACK">{item.name}</span>
            </h3> */}
          </div>

          <Post image={item.img} text={item.text} name={item.img} />
        </div>
        <div className="volunteering-info flex justify-between gap-8">
          <ContactForm />
          <Contact
            title="Get in touch with us"
            phone="+993 62 24 55 55"
            email="natural.res@gmail.com"
            address="M6WG+JCV, Karaul-Kuyu"
          />
        </div>
      </Container>
    </main>
  );
};

export default VolunteeringItem;
