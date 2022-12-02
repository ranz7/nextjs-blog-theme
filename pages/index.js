import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>My app</title>
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>
          Ja postanowiłem stworzyć stronę przy pomocy Netlify.
        </div>

        <div>
          Najpierw trzeba było się zarejestrować na Netlify. Ja wybrałem opcję rejestracji przez GitHub.
          <img src="../images/1.png"></img>
        </div>

        <div>
          Później zostałem przeniesiony na dashboard, gdzie wybrałem opcję &quot;Start from a template&quot;.
          <img src="../images/2.png"></img>
        </div>
        
        <div>
          Następnie wybrałem Template &quot;Bejamas Next.js Blog Starter&quot; klikając w &quot;Source code&quot;
          <img src="../images/3.png"></img>
        </div>

        <div>
          Teraz sklonowałem template do mojego repozytorium na GitHubie klikając w &quot;GitHub&quot; na dole.
          <img src="../images/4.png"></img>
        </div>

        <div>
          To jest czas na wypełnienie prostych ustawień. Po wpisaniu wszystkich klikamy w &quot;Deploy&quot;.
          <img src="../images/5.png"></img>
        </div>

        <div>
          Wystarczy poczekać aż strona sama się postawi.
          <img src="../images/6.png"></img>
        </div>

        <div>
          Strona już działa. Można na nią wejść z dowolnej maszyny podpiętej do internetu.
          <img src="../images/7.png"></img>
        </div>

        <div>
          Teraz wystarczy pushować zmiany do repozytorium na GitHubie, a zmiany są automatycznie dodawane na stronę.
        </div>
      </main>
    </div>
  );
}