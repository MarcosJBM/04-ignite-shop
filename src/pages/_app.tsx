import { AppProps } from 'next/app';
import Image from 'next/future/image';
import Link from 'next/link';

import logoImg from '../assets/logo.svg';
import { ShoppingCartButton } from '../components/shopping-cart-button';
import { globalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href='/'>
          <Image src={logoImg} alt='Ignite Shop' />
        </Link>

        <ShoppingCartButton />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
