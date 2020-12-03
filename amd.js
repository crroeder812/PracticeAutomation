var mySearches = {
    // search bar test values
    search1: 'graphics cards',
    search2: '123456',
    search3: '!@#$%^&*',
    searchResult1: 'AMD Graphics Card Specifications',
    searchResult2: 'Nothing here matches your search',
    // learn more test values
    result1: 'AMD Radeon RX 6000 Series Graphics Cards',
    result2: 'AMD Instinct™ MI100 Accelerator',
    result3: 'AMD CDNA Architecture',
    result4: 'AMD ROCm™ Open Ecosystem',
    result5: 'High Performance Computing (HPC) & AMD',
    result6: 'AMD Ryzen™ Desktop Processors',
    result7: 'AMD Ryzen™ Embedded V2000 Series',
    result8: 'AMD RDNA™ 2 Graphics Architecture',
    result9: 'AMD Fortnite Island: For Fans. With Fans.',
    result10: 'Build the AMD Ultimate Gaming Desktop',
    result11: 'Mini PCs – Powered by AMD Ryzen™ Embedded',
    result12: 'Corporate Responsibility',
    result13: 'AMD COVID-19 High Performance Computing (HPC) Fund',
    result14: 'AMD EPYC™ Server Processors for Hyperconverged Infrastructure (HCI)',
    result15: 'AMD Ryzen "Equipped to Win" Game Offer',
    result16: 'AMD Radeon™ "Raise the Game" Offer',
    result17: 'AMD Radeon™ Software Adrenalin 2020 Edition',
    result18: 'World of Warcraft®: Shadowlands',
    result19: 'The Riftbreaker™',
    result20: 'Far Cry 6'
}
var amdPage = {}
module.exports = {
    beforeEach: browser => {
        amdPage = browser.page.amdPage()
        amdPage
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        amdPage.end()
    },
    'Cookies': browser => {
        amdPage
            .waitForElementPresent('a[class="cookieComplianceClose"]')
            .click('a[class="cookieComplianceClose"]')
    },
    // 'SearchBar test': browser => {
    //     amdPage
    //         .setValue('@searchBar', [mySearches.search1])
    //         .click('@search')
    //     amdPage
    //         .ifIsPresent('@popUpClose')
    //     amdPage
    //         .verify.containsText('@graphicsResults', [mySearches.searchResult1])
    //         .click('@homepageButton')
    //     amdPage
    //         .ifIsPresent('@popUpClose')
    //     amdPage
    //         .setValue('@searchBar', [mySearches.search2])
    //         .click('@search')
    //     amdPage
    //         .ifIsPresent('@popUpClose')
    //     amdPage
    //         .verify.containsText('@invalidResult', [mySearches.searchResult2])
    //         .click('@homepageButton')
    //     amdPage
    //         .ifIsPresent('@popUpClose')
    //     amdPage
    //         .setValue('@searchBar', [mySearches.search3])
    //         .click('@search')
    //     amdPage
    //         .ifIsPresent('@popUpClose')
    //     amdPage
    //         .verify.containsText('@invalidResult', [mySearches.searchResult2])
    // },
    'Learn more buttons test': browser => {
        amdPage
            .click('@learnMore1')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result1])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore2')
            .click('@learnMore2')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result2])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore3')
            .click('@learnMore3')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result3])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore4')
            .click('@learnMore4')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result4])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore5')
            .click('@learnMore5')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result5])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore6')
            .click('@learnMore6')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result6])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore7')
            .click('@learnMore7')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result7])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore8')
            .click('@learnMore8')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result8])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore9')
            .click('@learnMore9')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result9])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore10')
            .click('@learnMore10')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result10])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore11')
            .click('@learnMore11')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result11])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore12')
            .click('@learnMore12')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result12])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore13')
            .click('@learnMore13')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result13])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore14')
            .click('@learnMore14')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result14])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore15')
            .click('@learnMore15')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result15])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore16')
            .click('@learnMore16')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result16])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore17')
            .click('@learnMore17')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result17])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore18')
            .click('@learnMore18')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result18])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore19')
            .click('@learnMore19')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result19])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore20')
            .click('@learnMore20')
        amdPage
            .ifIsPresent('@popUpClose')
        amdPage
            .verify.containsText('@learnMoreResult', [mySearches.result20])
            .click('@homepageButton')
    }
}