import { FunctionComponent } from 'react';
import Image from 'next/image';

interface PostProps {
  image: string;
  text: string;
  name: string;
}

const Post: FunctionComponent<PostProps> = ({ image, text, name }) => {
  return (
    <section className="post flex flex-col gap-[24px]">
      <div className="post-img rounded-[16px] overflow-hidden w-full h-[480px]">
        <Image
          alt={name}
          src={image}
          width={1320}
          height={480}
          unoptimized
          unselectable="off"
          objectFit="cover"
        />
      </div>
      <p className="post-text text-BIG_TEXT text-BLACK">{text}</p>
    </section>
  );
};

export default Post;
