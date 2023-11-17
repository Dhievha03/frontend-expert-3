const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.card-img .card-content a');
  const firstRestaurant = locate('.card-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-img .card-content .card-title');

  const likedRestaurant = locate('.card-title').first();
  const likedRestaurantName = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#list-card');
  I.see('Data masih kosong', '#empty_text');
});
