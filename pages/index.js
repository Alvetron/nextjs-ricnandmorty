import Head from 'next/head'
import Header from '@/components/Header/Header'
import IntroSlider from '@/components/Intro/IntroSlider'
import SectionCharacters from '@/components/SectionCharacters/SectionCharacters'

export default function Home({data}) {


  return (
    <>
      <div className='screen_height' id='screen_height'>
        <Head>
          <title>Rick&Morty</title>
            {/* FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <Header/>
        <IntroSlider/>
      </div>
      <main>
          <SectionCharacters data={data}/>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}