import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

const firstPost = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <section>
        <header>
          <h2>{data.title}</h2>
        </header>
        <p>{data.body}</p>
      </section>
      <figure className="block">
        <Image
          src="/img/image1.jpg"
          width={600}
          className="block"
          height={600}
          alt="my image!"
        ></Image>
      </figure>
      <Link href="/">
        <a className="block">Volver al inicio!</a>
      </Link>
    </Layout>
  );
};

export default firstPost;

export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({
      params: {
        id: `${id}`,
      },
    }));
    console.log(paths);
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async ({ params: { id } }) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
