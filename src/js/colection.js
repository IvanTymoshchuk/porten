import { colection } from './colectionItems';

const colectionEl = document.querySelector('.products_list-sec');
const element = createColection(colection);
colectionEl.insertAdjacentHTML('afterbegin', element);

function createColection() {
  return colection
    .map(({ preview, name, price }) => {
      return `  
      <li class="products_item">
      <div class="img_wrapper img_wrapper-height">
        <a href="#">
            <img src=${preview} alt=${name} />
        </a>
        </div>
        <div class="hero_wrap-span">
         <span >${name}</span></div>
        <span class="hero_price-span">${price}</span>
      </li>`;
    })
    .join('');
}
