import { Handbag } from 'phosphor-react';

import {
  QuantityOfItens,
  ShoppingCardButtonContainer,
} from '../../styles/components';

export function ShoppingCartButton() {
  const quantity = 4;

  return (
    <ShoppingCardButtonContainer>
      <Handbag size={24} weight='bold' color='#8D8D99' />

      <QuantityOfItens>
        <p>{quantity}</p>
      </QuantityOfItens>
    </ShoppingCardButtonContainer>
  );
}
