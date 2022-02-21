import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AnswerBox from "../components/answerBox";
import ProgressTopBar from "../components/progress";

export default function Home() {
  const data = [
  'https://media1.giphy.com/media/pOLspHmrKmQmc/giphy.gif?cid=ecf05e47mt0ym24xu07n7p83r1ce9fumsapizevxgxov16d0&rid=giphy.gif&ct=g'

  ]
  return (
    <div className={styles.container} style={{backgroundImage:`url(` + data[0] +`)`}}>
      <Head>
        <title>Trivial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
c

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create a shareable quizzes
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>Create your quiz</code>
        </p>
        <AnswerBox/>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
