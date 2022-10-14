import { styled } from '..';

export const ShoppingCartButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '3rem',
  height: '3rem',

  borderRadius: 6,

  backgroundColor: '$gray800',

  svg: {
    position: 'absolute',
  },
});

export const QuantityOfItens = styled('div', {
  position: 'relative',
  top: -18,
  left: 20,

  borderRadius: '50%',
  border: '3px solid $gray900',

  backgroundColor: '$green500',

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '1.5rem',
    height: '1.5rem',

    fontSize: '0.875rem',

    color: '$white',
  },
});
