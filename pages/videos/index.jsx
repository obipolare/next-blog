import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <iframe
        height="315"
        className="video"
        src="https://www.youtube.com/embed/EvWKuubUTko"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Layout>
  );
};

export default index;
