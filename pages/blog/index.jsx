import Link from "next/link";
import Layout from "../../components/Layout";

const index = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <h1>Lista de Posts!</h1>
      {posts.map(({ id, title, body }) => (
        <div key={id}>
          <header>
            <Link href={`/blog/${id}`}>
              <a>
                <h1>{`post ${id}`}</h1>
              </a>
            </Link>
          </header>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
};

export default index;

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const posts = data.filter((post) => post.id < 15);

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
