import Head from 'next/head';
import Header from '@/components/Header/Header';
import IntroSlider from '@/components/Intro/IntroSlider';
import SectionCharacters from '@/components/SectionCharacters/SectionCharacters';

export default function Home({ data }) {
  return (
    <>
      <div className="screen_height" id="screen_height">
        <Head>
          <title>Rick&Morty</title>
        </Head>
        <Header />
        <IntroSlider />
      </div>
      <main>
        <SectionCharacters data={data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}
