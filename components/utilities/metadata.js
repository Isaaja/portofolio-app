import Head from "next/head";

const Metadata = ({ title }) => {
  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>
  );
};

export default Metadata;
