const INITIAL_STATE = {
  sections: [
    {
      title: "Promoções",
      imageUrl:
        "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 1,
      size: "large",
      linkUrl: "shop/hats",
    },
    {
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 1,
      size: "large",
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/4914807/pexels-photo-4914807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/9811640/pexels-photo-9811640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
