const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('ul#ingredients');

const createUlList = (items) => {
  return items.map((item) => {
    const ulItem = document.createElement('li');
    ulItem.classList.add('item');
    ulItem.textContent = item;
    return ulItem;
  });
};

const elements = createUlList(ingredients);
ulList.append(...elements);
console.log(ulList);
