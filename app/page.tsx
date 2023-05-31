// Components
import Container from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import MainBlock from '@/components/MainBlock';
import SecondaryBlock from '@/components/SecondaryBlock';
import Button from '@/components/Button';

const Home = () => {
  return (
    <main className="flex flex-col gap-[80px]">
      <section className="hero">
        <Container className="flex justify-between items-center">
          <div className="hero-content flex flex-col gap-8 max-w-[645px]">
            <h1 className="hero-title text-BLACK font-bold text-BIT_TITLE">
              Empowering <span className="text-GREEN">Turkmenistan's</span> Ecology for a{' '}
              <span className="text-GREEN">Sustainable Future</span>
            </h1>
            <p className="hero-text text-BLACK text-BIG_TEXT leading-[150%]">
              Discover the fragile beauty of Turkmenistan's ecology and join our community of
              passionate individuals working together to conserve and restore the natural wonders
              that define our nation.
            </p>
            <Button text="Explore more" />
          </div>
          <div className="hero-img">
            <Image
              alt="nature"
              src="/hero-img.jpg"
              unoptimized
              unselectable="off"
              width={586}
              height={480}
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="news">
        <Container className="flex flex-col gap-[48px]">
          <h2 className="news-title text-BLACK font-bold text-BIT_TITLE">
            <span className="text-GREEN">News and Updates</span> for a Sustainable Turkmenistan
          </h2>
          <div className="news-content flex flex-col gap-[32px]">
            <MainBlock
              link="/"
              text="Turkmenistan Implements New Green Policies to Combat Climate Change"
              imageLink="/main-news.jpg"
            />
            <div className="news-content-bottom flex justify-between gap-[32px]">
              <SecondaryBlock
                link="/"
                imageLink="/news-sec-1.jpg"
                text="Rare Discovery: Endangered Species Spotted in Turkmenistan's Protected Areas"
              />
              <SecondaryBlock
                link="/"
                imageLink="/news-sec-2.jpg"
                text="Rare Discovery: Endangered Species Spotted in Turkmenistan's Protected Areas"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
