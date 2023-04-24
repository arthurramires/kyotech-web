import Head from 'next/head';
import Menu from '../../components/Menu/Menu.js';

function Contact() {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content="index, follow"/>
        <meta name="description" content="Kyotech"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <title>Kyotech - Fale Conosco</title>
      </Head>
      <Menu />
      Conteudo do Site
    </div>
  )
}

export default Contact;