import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me Ajude</title>
        <meta name="description" content="Me Ajude" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Por favor me Ajude, tenho <span className='red'>LEUCEMIA</span>!!!
        </h1>

        <div>
          <br />
          <Image src="/woods1.png" width={600} height={600} />
        </div>

        <h2 className='red'>💀💀💀 O QUE É A LEUCEMIA? 💀💀💀</h2>

        <p>
          A leucemia é um câncer que tem início nas células-tronco da medula óssea. Na leucemia, as células sanguíneas doentes (câncer) se formam e atrapalham a produção das células sanguíneas saudáveis da medula óssea, diminuindo seu número normal. A leucemia pode ser classificada como “aguda” ou “crônica” de acordo com a velocidade de crescimento das células doentes assim como de sua funcionalidade. A leucemia aguda progride rapidamente e produz células que não estão maduras e não conseguem realizar as funções normais. A leucemia crônica, entretanto, normalmente progride lentamente e os pacientes têm um número maior de células maduras. No geral, essas poucas células maduras conseguem realizar algumas das funções normais. A leucemia também é classificada a partir do tipo de célula do sangue que está doente. As células doentes da leucemia são os glóbulos brancos produzidos na medula óssea. Um tipo de glóbulo branco doente é chamado de “mieloide” e o outro tipo de “linfoide”. O nome dos quatro tipos de leucemias descreve quão rápido (aguda) ou devagar (crônica) a doença progride e identifica o tipo de glóbulo branco que está envolvido (mieloide ou linfoide).
        </p>

        <div className='doar'>
          <span>
            100% de esforço enquanto houver 1% de chance<br />Doe agora e faça a diferença na vida do Woods e seus familiares
          </span>
          <a href="https://livepix.gg/woodszin" target="_blank">DOAR AGORA</a>
        </div>

        <div className='saberMais'>
          <h2>Caso queira saber mais para comprovar minha história, me chamo Woods, tenho alguns problemas como microcefalia, anorexia, gigantismo, TDHA e outros 👉👌😎, estou on todos os dias no site:</h2>
          <a href="https://www.twitch.tv/woodszin" target="_blank">https://www.twitch.tv/woodszin</a>
        </div>
      </main>

      <footer className={styles.footer}>
        Feito com todo amor e carinho pelo John China, deixo aqui um agradecimento especial para minha grande amiga e musa inspiradora Eduarda Bctinha.
      </footer>
    </div>
  )
}
