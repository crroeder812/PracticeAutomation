module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOddSearchBar: {
            selector: '//input[@name="evenOddInput"]',
            locateStrategy: 'xpath'
        },
        splitButton: 'button[name="evenOddButton"]',
        oddsButton: 'span[name="oddResults"]',
        objectSearchBar: {
            selector: '//input[@name="objectFilterInput"]',
            locateStrategy: 'xpath'
        },
        objectButton: 'button[name="objectFilterButton"]',
        objectResults: {
            selector: '//span[@name="objectFilterResults"]',
            locateStrategy: 'xpath'
        },
        stringSearchBar: {
            selector: '//input[@id="nameFilterInput"]',
            locateStrategy: 'xpath'
        },
        stringButton: 'button[id="nameFilterButton"]',
        stringResults: {
            selector: '//span[@name="nameFilterResults"]',
            locateStrategy: 'xpath'
        },
        palindromeSearchBar: {
            selector: '//input[@name="palindromeInput"]',
            locateStrategy: 'xpath'
        },
        palindromeButton: 'button[name="palindromeButton"]',
        sumSearchBar1: 'input[name="sumInput1"]',
        sumSearchBar2: 'input[name="sumInput2"]',
        addButton: 'button[name="sumButton"]',
        sumResults: 'span[name="sumResults"]'
    }
}