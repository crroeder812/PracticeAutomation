var myLoop = {
    mySearch: (object, data) => {
        object
            .click('@searchBar')
            .setValue('@searchBar', data.search)
            .click('@enterArrow')
            .verify.containsText('@resultText', data.result)
            .click('@searchBar')
            .click('@clearSearchBar')
    }
}
var myData = [
    {
        search: 'couch',
        result: 'BRÅTHULT'
    },
    {
        search: 'bed',
        result: 'MALM'
    },
    {
        search: 'desk',
        result: 'MICKE'
    }
]
var mySearches = {
    search1: 'couch',
    search2: 'bed',
    search3: 'desk',
    search4: 'BRÅTHULT',
    search5: 'MALM',
    search6: 'MICKE',
}
var search = [
    'couch'
]
var ikeaAsset = require('../testAssets/ikeaAsset')
var ikeaPage = {}
module.exports = {
    beforeEach: browser => {
        ikeaPage = browser.page.ikeaPage()
        ikeaPage
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        ikeaPage
            .end()
    },
    'Cookies': browser => {
        ikeaPage
            .waitForElementPresent('button[class="hnf-btn hnf-btn--primary hnf-banner__action-btn js-cookie-info__accept-button"]')
            .click('button[class="hnf-btn hnf-btn--primary hnf-banner__action-btn js-cookie-info__accept-button"]')
    },
    'Search Function Test': browser => {
        ikeaPage
            .searchCouch(mySearches.search1)
            .verify.containsText('@resultText', mySearches.search1)    
    },
    'Shopping List Test': browser => {
        ikeaPage
            ikeaAsset(browser,search)
        ikeaPage
            .verify.containsText('@couchBagCheck', mySearches.search4)
            .pause(5000)
    },
    'Bag Feature Loop Test': browser => {
        myData.forEach(searches => {
            myLoop
                .mySearch(ikeaPage, searches)
        })
    },
    'Adding To Bag Test': browser => {
        ikeaPage
            // couch 
            .click('@searchBar')
            .setValue('@searchBar', mySearches.search1)
            .click('@enterArrow')
            .verify.containsText('@resultText', mySearches.search1)
            .click('@sofaDetail')
            .waitForElementPresent('@addCouchToBag')
            .click('@addCouchToBag')
            .click('@shoppingBag')
            .verify.containsText('@couchBagCheck', mySearches.search4)
            // bed
            .click('@searchBar')
            .setValue('@searchBar', mySearches.search2)
            .click('@enterArrow')
            .verify.containsText('@resultText', mySearches.search2)
            .click('@bedDetail')
            .waitForElementPresent('@addBedToBag')
            .click('@addBedToBag')
            .click('@shoppingBag')
            .waitForElementPresent('@bedBagCheck')
            .verify.containsText('@bedBagCheck', mySearches.search5)
            // desk
            .click('@searchBar')
            .setValue('@searchBar', mySearches.search3)
            .click('@enterArrow')
            .verify.containsText('@resultText', mySearches.search3)
            .click('@deskDetail')
            .waitForElementPresent('@addDeskToBag')
            .click('@addDeskToBag')
            .click('@shoppingBag')
            .waitForElementPresent('@deskBagCheck')
            .verify.containsText('@deskBagCheck', mySearches.search6)
    }
}