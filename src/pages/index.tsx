import Image from 'next/future/image';
import { HomeContainer, Product } from '../styles/pages/home';

import firstShirt from '../assets/shirts/1.png';
import secondShirt from '../assets/shirts/2.png';
import thirdShirt from '../assets/shirts/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={firstShirt} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={secondShirt} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
