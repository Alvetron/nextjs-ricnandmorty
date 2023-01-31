import Head from 'next/head';
import IntroSlider from '@/components/Intro/IntroSlider';
import SectionCharacters from '@/components/SectionCharacters/SectionCharacters';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Rick&Morty</title>
        {/* META */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <IntroSlider />
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
