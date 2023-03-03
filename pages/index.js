import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home({ imgs }) {
  return (
    <>
      <Head>
        <title>Image Slider</title>
        <meta name="description" content="Image slider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.gif" />
      </Head>
      <Carousel showThumbs={false}>
        {imgs.map((img) => (
          <Image
            src={img.url}
            key={img.id}
            alt="random"
            width={400}
            height={400}
            priority
          />
        ))}
      </Carousel>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  return {
    props: {
      imgs: data.slice(0, 6),
    },
  };
};
