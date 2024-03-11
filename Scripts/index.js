
// let item = {
//   item_image: 'Images_myntra/1.jpg',
//   rating:{
//     satrs: 4.5,
//     noOfReviews: 1400,
//   },
//   company_name: 'Carlton London',
//   item_name: 'Rhodium-Plated CZ Floral Studs',
//   current_price: 606,
//   original_price: 1045,
//   discount_percentage: 42
// }



let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemID) {
  bagItems.push(itemID);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));     /*to store the value permanently so that value will not disappear on refreshing the page */

  displayBagIcon()
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count')

  if (bagItems.length > 0){
    bagItemCountElement.style.visibility = 'visible';     /*bag count will visible */
    bagItemCountElement.innerHTML = bagItems.length;
  }else{
    bagItemCountElement.style.visibility = 'hidden';      /*bag count will not visible,if no items in the bag) */
  }
}
function displayItemsOnHomePage() {
let itemsContainerElement = document.querySelector('.items-container')

if (!itemsContainerElement)   return;

let innerHTML = '';
items.forEach(item => {
  innerHTML += 
  `<div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% off)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
});

itemsContainerElement.innerHTML = innerHTML;
}