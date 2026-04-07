import Head from "next/head";

const Metadata = ({ description }) => {
   return (
      <Head>
         {/* HTML Meta Tags */}
         <title>Isa Iant Maulana Portfolio</title>
         <meta name="description" content={description} />
         <meta charSet="UTF-8" />
         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
   );
};

export default Metadata;
