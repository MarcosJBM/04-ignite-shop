import { Handbag } from 'phosphor-react';

import { theme } from '../../styles';
import {
  QuantityOfItens,
  ShoppingCartButtonContainer,
} from '../../styles/components';

export function ShoppingCartButton() {
  const quantity = 1;

  const hasItens = quantity
    ? theme.colors.gray300.value
    : theme.colors.gray500.value;

  return (
    <ShoppingCartButtonContainer>
      <Handbag size={24} weight='bold' color={hasItens} />

      <QuantityOfItens>
        <span>{quantity}</span>
      </QuantityOfItens>
    </ShoppingCartButtonContainer>
  );
}
