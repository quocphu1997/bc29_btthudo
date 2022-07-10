const DEFAULT_STATE = {
  selectedType: "topclothes",

  modal: {
    topclothes: "/images/clothes/topcloth5.png",
    botclothes: "/images/clothes/botcloth4.png",
    shoes: "/images/shoes/shoes2.png",
    handbags: "/images/handbags/handbag2.png",
    necklaces: "/images/necklaces/necklace3.png",
    hairstyle: "/images/hairstyle/hairstyle5.png",
    background: "/images/background/background1.jpg",
  },
};
export const thuDoReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SELECTED_TYPE": {
      // state.selectedType = payload;
      return { ...state, selectedType: payload };
    }
    case "CHANGE_MODAL": {
      const { type, imgSrc_png } = payload;

      const newModal = { ...state.modal };
      newModal[type] = imgSrc_png;
      state.modal = newModal; // render lại
      return { ...state };
    }
    default:
      return state;
  }
};
