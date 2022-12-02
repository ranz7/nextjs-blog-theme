import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>

    <div>
      <main>
        <div>
          Ja postanowiłem stworzyć stronę przy pomocy Netlify.
        </div>

        <div>
          Najpierw trzeba było się zarejestrować na Netlify. Ja wybrałem opcję rejestracji przez GitHub.
          <img src="https://ibb.co/sVWwBgv"></img>
        </div>

        <div>
          Później zostałem przeniesiony na dashboard, gdzie wybrałem opcję &quot;Start from a template&quot;.
          <img src="https://ibb.co/GHwRMXt"></img>
        </div>
        
        <div>
          Następnie wybrałem Template &quot;Bejamas Next.js Blog Starter&quot; klikając w &quot;Source code&quot;
          <img src="https://ibb.co/5FgtH5z"></img>
        </div>

        <div>
          Teraz sklonowałem template do mojego repozytorium na GitHubie klikając w &quot;GitHub&quot; na dole.
          <img src="https://ibb.co/bFGCCYm"></img>
        </div>

        <div>
          To jest czas na wypełnienie prostych ustawień. Po wpisaniu wszystkich klikamy w &quot;Deploy&quot;.
          <img src="https://ibb.co/xH6khTg"></img>
        </div>

        <div>
          Wystarczy poczekać aż strona sama się postawi.
          <img src="https://ibb.co/0VJdXGQ"></img>
        </div>

        <div>
          Strona już działa. Można na nią wejść z dowolnej maszyny podpiętej do internetu.
          <img src="https://ibb.co/fC0F3LV"></img>
        </div>

        <div>
          Teraz wystarczy pushować zmiany do repozytorium na GitHubie, a zmiany są automatycznie dodawane na stronę.
        </div>
      </main>
    </div>

      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
