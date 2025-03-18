import Head from "next/head";

const Heads = () => {
  return (
    <Head>
      <meta
        property="og:url"
        content="https://fusion-softworks-agency.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="John Foo | Software developer" />
      <meta
        property="og:description"
        content="John is a software developer focused on AI and web development."
      />
      <title>John Foo | Software developer</title>
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
