import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createCardRestaurantTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="content">
      <h1>Liked Restaurant</h1>
      <div class="group-card" id="list-card"></div>
    </section>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurants();
    const dataContainer = document.querySelector('#list-card');
    if (data.length === 0) {
      dataContainer.innerHTML = `
          <p id="empty_text">Data masih kosong</p>
      `;
    } else {
      data.forEach((restaurant) => {
        dataContainer.innerHTML += createCardRestaurantTemplate(restaurant);
      });
    }
  },
};

export default Like;
