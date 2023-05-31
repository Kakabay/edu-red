import Container from '@/components/Container';
import ItemCard from '@/components/ItemCard';
import { plantRedbook } from '@/data/redbooks';
import { FunctionComponent } from 'react';

interface ReservesProps {}

const Reserves: FunctionComponent<ReservesProps> = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[48px]">
        <h2 className="reserves-title font-bold text-BIT_TITLE text-BLACK">National reserves</h2>
        <section className="red-book-item-list grid grid-cols-3 gap-x-[24px] gap-y-[40px] content-center">
          {plantRedbook
            ? plantRedbook.families[0].items.map((item) => (
                <ItemCard name={item.name} link={item.img} key={item.id} />
              ))
            : 'no items'}
        </section>
      </Container>
    </main>
  );
};

export default Reserves;
