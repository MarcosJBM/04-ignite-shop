import { useRouter } from 'next/router';

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          aliquid aut consectetur maxime illo tempore, quibusdam quod veniam,
          rerum possimus cumque at esse modi praesentium porro, quae odit
          veritatis aperiam.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
