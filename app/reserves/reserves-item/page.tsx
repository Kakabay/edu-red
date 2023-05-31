import Contact from '@/components/Contact';
import Container from '@/components/Container';
import Post from '@/components/Post';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ReservesItemProps {}

const itemText = {
  text: "Salsola botschantzevii, also known as Botschantzev's Russian Thistle or Turkmenian Burning Bush, is a plant species that belongs to the family Amaranthaceae. It is native to the arid regions of Central Asia, including Turkmenistan. The plant is a perennial subshrub characterized by its unique appearance and adaptations to survive in harsh desert environments. Salsola botschantzevii has a dense, bushy growth habit with many branches that give it a rounded or globular shape. It typically reaches a height of about 30-60 centimeters (12-24 inches). The leaves of Salsola botschantzevii are small, narrow, and succulent, which helps reduce water loss through transpiration. The stems and leaves are covered in tiny hairs, giving them a grayish-green or bluish-gray coloration. These hairs also help protect the plant from excessive sunlight and reduce water evaporation. One of the distinctive features of Salsola botschantzevii is its flowering spikes, which appear in late spring or early summer. The flowers are small and inconspicuous, usually greenish or yellowish in color. They give rise to small, dry fruits that contain seeds. Salsola botschantzevii is well-adapted to arid conditions and can tolerate drought, high temperatures, and saline soils. It is often found in sandy and gravelly habitats, including deserts, semi-deserts, and coastal areas. In Turkmenistan, Salsola botschantzevii plays a significant role in the ecosystem. It helps stabilize sandy soils and prevents erosion due to its deep root system. Additionally, the plant provides food and shelter for various desert-dwelling organisms, including insects and small mammals. However, Salsola botschantzevii can also become invasive in certain regions outside its native range. Its ability to disperse large numbers of seeds, combined with its tolerance to harsh conditions, allows it to colonize and dominate disturbed habitats. As a result, it can outcompete native plant species and negatively impact biodiversity. Efforts are being made to manage and control the spread of Salsola botschantzevii in areas where it has become invasive. This includes monitoring and early detection, as well as implementing appropriate control measures to mitigate its negative ecological effects. Overall, Salsola botschantzevii is an interesting and resilient plant species with both ecological significance and the potential to become invasive in certain environments.",
};

const ReservesItem: FunctionComponent<ReservesItemProps> = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[80px]">
        <div className="wrapper flex flex-col gap-[40px]">
          <div className="red-book-nav flex flex-col gap-[8px]">
            <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">
              Repetek Nature Reserve
            </h2>
            <h3 className="red-book-subnav text-GRAY text-SMALL_TEXT">
              <Link href={'/reserves'}>National reserves</Link> -{' '}
              <span className="font-bold text-BLACK"> Repetek Nature Reserve</span>`
            </h3>
          </div>

          <Post image="/plant-family-1.jpg" text={itemText.text} name="Repetek Nature Reserve" />
        </div>
        <Contact
          title="Get in touch with us"
          phone="+993 62 24 55 55"
          email="repetek.res@gmail.com"
          address="M6WG+JCV, Karaul-Kuyu"
        />
      </Container>
    </main>
  );
};

export default ReservesItem;
