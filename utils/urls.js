const urls={
  referer : "https://order.dominos.com/en/pages/order/",
  sourceUri : "order.dominos.com",
  store : {
    find : "https://order.dominos.com/power/store-locator?s=${line1}&c=${line2}",
    info : "https://order.dominos.com/power/store/${storeID}/profile",
    menu : "https://order.dominos.com/power/store/${storeID}/menu?lang=${lang}&structured=true"
  },
  order: {
    validate: "https://order.dominos.com/power/validate-order",
    price: "https://order.dominos.com/power/price-order",
    place: "https://order.dominos.com/power/place-order"
  },
  track: "https://order.dominos.com/orderstorage/GetTrackerData?"
};

export {
    urls as default,
    urls
}
