import Link from "next/link";
import Image from "next/image";
import { IRedbookItem } from "@/typings/redbook.data.types";

interface IItemCard extends IRedbookItem {
  org?: string;
  type: "reserves" | "redbook/plants" | "redbook/animals" | "volunteering";
}

const ItemCard = ({ name, id, img, org, familyId, type }: IItemCard) => {
  return (
    <Link
      href={
        type === "redbook/plants" || type === "redbook/animals"
          ? `/${type}/families/${familyId}/${id}`
          : `/${type}/${id}`
      }
      className="flex flex-col gap-[16px]"
    >
      <div className="item-card-image max-w-[424px] max-h-[240px] overflow-hidden rounded-[16px]">
        <Image
          alt={`${name}`}
          width={424}
          height={240}
          src={img}
          className="w-full h-full object-cover transition-all hover:scale-110"
        />
      </div>
      <div className="item-card-info flex flex-col gap-[8px] text-BLACK">
        <h2 className="family-item-title text-SMALL_TITLE font-bold">{name}</h2>
        {org ? (
          <h2 className="family-item-subtitle text-BIG_TEXT">{org}</h2>
        ) : null}
      </div>
    </Link>
  );
};

export default ItemCard;
