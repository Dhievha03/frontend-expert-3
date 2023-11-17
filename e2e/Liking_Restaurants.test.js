const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#list-card');
  I.see('Data masih kosong', '#empty_text');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Data masih kosong', '#empty_text');

  I.amOnPage('/');

  I.seeElement('.card-img .card-content a');
  const firstRestaurant = locate('.card-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-img .card-content .card-title');

  const likedRestaurantName = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
