/* eslint-disable indent */
const itemData = {
  pricing: {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  },
  details: {
    item_name:
      'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
    quantity: 1,
    image_uri: 'https://avatars1.githubusercontent.com/u/24580640?v=4'
  }
};

export const getItemData = (delay = 1000) => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(itemData);
    }, delay);
  });
};
