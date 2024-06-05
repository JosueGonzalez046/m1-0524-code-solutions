interface order {
  datePlaced: string;
  total: number;
  shipTo: string;
  orderNumber: string;
  delivered: string;
  item: string;
  returnWindow: string;
}

const orderHistory: order[] = [
  {
    datePlaced: 'Aug fourth twenty twenty',
    total: 34,
    shipTo: 'JS Masher',
    orderNumber: '11439416898772232',
    delivered: 'aug eighth twenty twenty',
    item: 'book',
    returnWindow: 'Sep seventh twenty twenty',
  },
  {
    datePlaced: 'July 19 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '11399842681280257',
    delivered: 'July 20 2020',
    item: 'book',
    returnWindow: 'Aug 19 2020',
  },
  {
    datePlaced: 'July 4 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '11428755579059409',
    delivered: 'July 7 2020',
    item: 'hardware',
    returnWindow: 'Aug 5 2020',
  },
  {
    datePlaced: 'july 3 2020',
    total: 94.95,
    shipTo: 'JS Masher',
    orderNumber: '11328831772648248',
    delivered: 'July 5 2020',
    item: 'hardware',
    returnWindow: 'Aug 4 2020',
  },
];
console.log('value of order history: ', orderHistory);
