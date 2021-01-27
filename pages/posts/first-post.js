import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Posts</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a className="bg-indigo-700 text-white p-5">Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
