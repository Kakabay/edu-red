import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ButtonProps {
  text: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text }) => {
  return (
    <Link
      href="/"
      className="btn inline-block w-fit bg-GREEN text-WHITE py-[14px] px-[24px] text-BIG_TEXT rounded-[8px] font-bold my-[16px]">
      {text}
    </Link>
  );
};

export default Button;
