const assert = require('assert');

Feature('Detail Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('show detail one restaurant', async ({ I }) => {
  I.seeElement('.card-img .card-content a');
  const firstRestaurant = locate('.card-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#detail-restaurant');
  const detailRestaurantName = await I.grabTextFrom('#restaurant-name');

  assert.strictEqual(firstRestaurantName, detailRestaurantName);
});
