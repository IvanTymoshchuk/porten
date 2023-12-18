import { colection } from './aboutItem';

const colectionEl = document.querySelector('.about_list');
const element = createColection(colection);
colectionEl.insertAdjacentHTML('beforeend', element);

function createColection() {
  return colection
    .map(({ preview, name, discr, hasteg }) => {
      return `  
      <li class="about_items">
      <div class="about_img-wrap">
            <img src=${preview} alt=${name} />
        </div>
        <div class="about_inf">
         <span class="about_span">${name}</span>
          <p class="about_discr">${discr}</p>
           <div class="about_wrap-sec">
          <button class="link about_link">Читати</button>
        <span class="about_hasteg">${hasteg}</span>
        </div>
         </div>
        
      </li>`;
    })
    .join('');
}
