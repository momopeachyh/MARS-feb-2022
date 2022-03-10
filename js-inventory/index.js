function getItem() {
  return [
    { item: "PS4 Pro", stock: 3, original: 399.99 },
    { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
    { item: "Nintendo Switch", stock: 4, original: 299.99 },
    { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
    { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
  ];
}

let [item1, item2, item3, item4, item5] = getItem();

function handleItem1(item1) {
  const newItem = item1.item;
  const newStock = item1.stock;
  const newOriginal = item1.original;
  const newDiscount = item1.discount || 0;
  const newSale = newOriginal - newOriginal * newDiscount;
  const newTotal = newSale * newStock;

  return {
    item: newItem,
    stock: newStock,
    original: newOriginal,
    sale: newSale,
    total: newTotal,
  };
}
