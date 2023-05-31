// React components
import Link from 'next/link';
import { FC } from 'react';
// Components
import Container from '@/components/Container';
import ItemCard from '@/components/ItemCard';
// Data
import { plantRedbook } from '@/data/redbooks';

interface familyListProps {}

const familyList: FC<familyListProps> = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[48px]">
        <div className="red-book-nav flex flex-col gap-[8px]">
          <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">Red book</h2>
          <h3 className="red-book-subnav text-GRAY text-SMALL_TEXT">
            <Link href={'/redbook'}>Red book</Link> -{' '}
            <Link href={'/redbook/families'}>
              The Red Data Book of Turkmenistan : Plants and Fungi
            </Link>{' '}
            -{' '}
            <span className="font-bold text-BLACK">
              The Red Data Book of Turkmenistan : Plants and Fungi
            </span>
          </h3>
        </div>

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

export default familyList;
