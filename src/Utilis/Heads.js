import Head from "next/head";

const Heads = () => {
  return (
    <Head>
      <meta
        property="og:url"
        content="https://fusion-softworks-agency.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="David Lee | Software developer" />
      <meta
        property="og:description"
        content="David is a software developer focused on AI and web development."
      />
      <title>David Lee | Software developer</title>
      <meta
        name="description"
        content="I am a software developer focused on AI and web development, build products using cutting edge technologies. Always friendly and provide excellent service."
      />
      <link rel="shortcut icon" href="/user.jpg" />
      <meta name="author" content="software" />
    </Head>
  );
};

export default Heads;
