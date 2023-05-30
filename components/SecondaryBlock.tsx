import Link from "next/link"
import Image from "next/image"

interface IProps {
    imageLink: string,
    text: string,
    textSize: "SMALL" | 'BIG'
}

const SecondaryBlock = ({ imageLink, text, textSize }: IProps) => {
    return(
        <Link href={"/"} className="news-main-news block h-[480px] w-[1320px] relative rounded-[16px] overflow-hidden">
            <Image alt="main news" src={`${imageLink}`} unoptimized unselectable="off" width={644} height={480} className="w-[644px] objet-cover h-full"/>
            <div className="absolute bottom-0 left-0 w-[644px] h-full flex items-end py-[30px] px-[40px] bg-IMAGE z-10 rounded-[16px]">
                <h3 className={`news-secondary-title text-WHITE font-bold text-${textSize === "BIG" ? "TITLE" : "SMALL_TITLE"} max-w-[605px]`}>{text}</h3>
            </div>
        </Link>
    )
}

export default SecondaryBlock;