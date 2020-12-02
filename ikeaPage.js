var commandsOne = {
    searchCouch: function(search) {
        this
        .click('input[type="search"]')
        .setValue('input[type="search"]', search)
        .click('button[class="search-box__button double"]')
        return this
    }
}
module.exports = {
    url: 'https://www.ikea.com/us/en/',
    commands: [commandsOne],
    elements: {
        searchBar: 'input[type="search"]',
        enterArrow: 'button[class="search-box__button double"]',
        resultText: 'div[class="products search__grid-item"]',
        couchSave: 'button[class="range-revamp-toggle-button range-revamp-toggle-button--icon-only range-revamp-toggle-button--transparent range-revamp-product-compact__add-to-list-button range-revamp-product-compact__add-to-list-button--selected"]',
        shoppingList: 'a[title="Shopping list"]',
        sofaDetail: 'a[href="https://www.ikea.com/us/en/p/brathult-sectional-3-seat-corner-borred-gray-green-s79217822/"]',
        addCouchToBag: 'button[class="range-revamp-btn range-revamp-btn--emphasised"]',
        shoppingBag: 'a[href="https://www.ikea.com/us/en/shoppingcart/"]',
        couchBagCheck: 'a[href="https://www.ikea.com/us/en/p/-s79217822"]', 
        bedDetail: 'a[href="https://www.ikea.com/us/en/p/malm-bed-frame-high-black-brown-luroey-s69009475/"]',
        addBedToBag: 'button[class="range-revamp-btn range-revamp-btn--emphasised"]',
        bedBagCheck: 'a[href="https://www.ikea.com/us/en/p/-s69009475"]',
        deskDetail: 'a[href="https://www.ikea.com/us/en/p/micke-desk-white-30213076/"]',
        addDeskToBag: 'button[class="range-revamp-btn range-revamp-btn--emphasised"]',
        deskBagCheck: 'a[href="https://www.ikea.com/us/en/p/-30213076"]',
        clearSearchBar: 'button[class="search-box__button double clear-input"]',
    }
}