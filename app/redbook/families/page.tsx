// React components
import Link from 'next/link';
// Components
import Container from '@/components/Container';
import SecondaryBlock from '@/components/SecondaryBlock';
// Data
import { plantRedbook } from '@/data/redbooks';

const Families = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[48px]">
        <div className="red-book-nav flex flex-col gap-[8px]">
          <h2 className="red-book-title font-bold text-BIT_TITLE text-BLACK">Red book</h2>
          <h3 className="red-book-subnav text-GRAY text-SMALL_TEXT">
            <Link href={'/redbook'}>Red book</Link> -{' '}
            <span className="font-bold text-BLACK">
              The Red Data Book of Turkmenistan : Plants and Fungi{' '}
            </span>
          </h3>
        </div>
        <div className="red-book-families-content flex justify-between gap-[32px]">
          {plantRedbook
            ? plantRedbook.families.map((item) => {
                return (
                  <SecondaryBlock
                    link="/redbook/families/family-list"
                    imageLink={item.img}
                    text={item.name}
                    key={item.id}
                  />
                );
              })
            : 'no families'}
        </div>
      </Container>
    </main>
  );
};

export default Families;
