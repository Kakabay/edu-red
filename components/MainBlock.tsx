import Link from 'next/link';
import Image from 'next/image';

interface IProps {
  imageLink: string;
  text: string;
  link: string;
}

const MainBlock = ({ imageLink, text, link }: IProps) => {
  return (
    <Link
      href={`${link}`}
      className="news-main-news block h-[480px] w-full relative rounded-[16px] overflow-hidden">
      <Image
        alt="main news"
        src={`${imageLink}`}
        unoptimized
        unselectable="off"
        width={1320}
        height={480}
        className="w-full objet-cover h-full"
      />
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end py-[30px] px-[40px] bg-IMAGE z-10">
        <h3 className={`news-secondary-title text-WHITE font-bold text-SMALL_TITLE max-w-[605px]`}>
          {text}
        </h3>
      </div>
    </Link>
  );
};

export default MainBlock;
