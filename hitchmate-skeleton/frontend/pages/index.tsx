import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hitch‑Mate</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to Hitch‑Mate</h1>
      <p>Your AI dating & relationship therapist is under construction 🚀</p>
    </Layout>
  );
}
