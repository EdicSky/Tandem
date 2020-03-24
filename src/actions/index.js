//範例
export const cartIncrement = () => {
  return {
    type: 'CART_INCREMENT',
  }
}

//community action
export const LikeToggle = state => {
  if (state) {
    return {
      type: 'LIKE_TOGGLE',
      num: 1,
      clicked: state,
    }
  } else {
    return {
      type: 'LIKE_TOGGLE',
      num: -1,
      clicked: state,
    }
  }
}
