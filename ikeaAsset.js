module.exports = (browser, search) => {
    browser 
    // shopping list test
    .click('input[type="search"]')
    .setValue('input[type="search"]', search)
    .click('button[class="search-box__button double"]')
    .verify.containsText('h1[class="search-summary__heading"]', search)
    .click('a[href="https://www.ikea.com/us/en/p/brathult-sectional-3-seat-corner-borred-gray-green-s79217822/"]')
    .waitForElementPresent('button[class="range-revamp-btn range-revamp-btn--icon-secondary"]')
    .click('button[class="range-revamp-btn range-revamp-btn--icon-secondary"]')
    .click('a[href="https://www.ikea.com/us/en/favorites/"]')
}