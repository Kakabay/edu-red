import Link from 'next/link';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface itemCardProps {
  name: string;
  link: string;
  org?: string;
}

const ItemCard: FunctionComponent<itemCardProps> = ({ name, link, org }) => {
  return (
    <Link href={'/'} className="flex flex-col gap-[16px]">
      <div className="item-card-image max-w-[424px] max-h-[240px] overflow-hidden rounded-[16px]">
        <Image alt={`${name}`} width={424} height={240} src={`${link}`} />
      </div>
      <div className="item-card-info flex flex-col gap-[8px] text-BLACK">
        <h2 className="family-item-title text-SMALL_TITLE font-bold">{name}</h2>
        {org ? <h2 className="family-item-subtitle text-BIG_TEXT">{org}</h2> : null}
      </div>
    </Link>
  );
};

export default ItemCard;
