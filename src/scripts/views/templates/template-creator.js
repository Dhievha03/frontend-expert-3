import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (data) => `
<div class="card card-content" id="detail-restaurant">  
<img class="img-content mb" src="${CONFIG.BASE_IMAGE_URL_LARGE + data.pictureId}" alt="gambar ${data.name}" crossorigin="anonymous">
  <h3 class="pm-0" id="restaurant-name">${data.name}</h3>
  <div class="location-container">
    <i class="fa fa-map-marker" aria-hidden="true" style="margin-right: 8px;"></i>
    <p>${data.address}, ${data.city}</p>
  </div>
  <div class="rating">
      RATING : &#9733; ${data.rating}
  </div>
  <div class="categories-container mb">
  ${data.categories
    .map(
      (category) => `
      <div class="categories">
        ${category.name}
      </div>
        
      `,
    )
    .join('')}
  </div>

  <div class="content-description mb">
    ${data.description}
  </div>

  <h3 class="pm-0">Menu : </h3>
  <div class="menus-container">
  <table border="1px" class="menu-table">
    <tr>
      <th>Makanan</th>
    </tr>
    ${data.menus.foods
    .map(
      (food) => `
      <tr>
        <td>${food.name}</td>
      </tr>
      `,
    )
    .join('')}
  </table>

  <table border="1px" class="menu-table">
    <tr>
      <th>Minuman</th>
    </tr>
    ${data.menus.drinks
    .map(
      (drink) => `
        <tr>
          <td>${drink.name}</td>
        </tr>
        `,
    )
    .join('')}
  </table>
  </div>
</div>
  <h3>Review</h3>
  ${data.customerReviews
    .map(
      (review) => `
      <div class="card card-content">
        <div class="review-header">
            <p class="mp-0">${review.name}</p>
            <small>${review.date}</small>
        </div>
        <hr>
        <p>${review.review}</p>
      </div>
      `,
    )
    .join('')}
`;

const createCardRestaurantTemplate = (data) => `
  <div class="card card-img">
    <div class="top-img">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="gambar ${data.name}" crossorigin="anonymous">
    </div>
    <div class="card-city">${data.city}</div>
    <div class="card-content">
        <div class="rating">
            RATING : &#9733; ${data.rating}
        </div>
        <br>
        <a class="card-title" href="#/detail/${data.id}">${data.name}</a>
        <p class="card-text">${data.description.slice(0, 100)}...</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const Loader = () => `
  <div class="loader"></div>
`;

export {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createCardRestaurantTemplate,
  createRestaurantDetailTemplate,
  Loader,
};
