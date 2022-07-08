
const DEFAULT_STATE = {
  modal: {
    topclothes: "/images/clothes/topcloth5.png",
    botclothes: "/images/clothes/botcloth4.png",
    shoes: "/images/shoes/shoes2.png",
    handbags: "/images/handbags/handbag2.png",
    necklaces: "/images/necklaces/necklace3.png",
    hairstyle: "/images/hairstyle/hairstyle5.png",
    background: "/images/background/background4.jpg",
  },
};
export const thuDoReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
