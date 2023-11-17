import { createCardRestaurantTemplate, Loader } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
    <section class="content">
      <h1>Explore Restaurant</h1>
      <div id="loading"></div>
      <div class="group-card" id="list-card"></div>
    </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const dataContainer = document.querySelector('#list-card');

    dataContainer.style.display = 'none';
    loading.innerHTML = Loader();

    try {
      const data = await RestaurantSource.getRestaurantList();
      const dataList = data.restaurants;

      dataList.forEach((restaurant) => {
        dataContainer.innerHTML += createCardRestaurantTemplate(restaurant);
      });

      loading.style.display = 'none';
      dataContainer.style.display = 'grid';
    } catch (err) {
      console.error(err);

      dataContainer.style.display = 'grid';
      loading.style.display = 'none';
    }
  },
};

export default Home;
