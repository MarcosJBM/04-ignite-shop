import { styled } from '..';

export const ShoppingCardButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '3rem',
  height: '3rem',

  borderRadius: 6,

  backgroundColor: '$gray800',
});

export const QuantityOfItens = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '1.75rem',
  height: '1.75rem',

  borderRadius: '50%',
  border: '4px solid $gray900',

  backgroundColor: '$green500',
});
