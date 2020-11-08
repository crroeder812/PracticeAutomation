var week2 = {}
module.exports = {
    beforeEach: browser => {
        week2 = browser.page.automationPage()
        week2
            .navigate()
    },
    after: browser => {
        week2
            .end()
    },
    'Evens and odds test': browser => {
        var mySearches1 = {
            evenNumber: '46',
            oddNumber: '19',
            Word: 'cat',
            result: '[null]'
        }
        week2
            .setValue('@evenOddSearchBar', mySearches1.evenNumber)
            .click('@splitButton')
            .waitForElementVisible('@evenOddSearchBar',mySearches1.evenNumber)
            .clearValue('@evenOddSearchBar')
            .setValue('@evenOddSearchBar', mySearches1.oddNumber)
            .click('@splitButton')
            .waitForElementVisible('@evenOddSearchBar', mySearches1.oddNumber)
            .pause(5000)
            .setValue('@evenOddSearchBar', mySearches1.word)
            .click('@splitButton')
            .waitForElementVisible('@oddsButton', mySearches1.result)
            .pause(5000)
    },
    'Filter object test': browser => {
        var mySearches2 = {
            object1: 'name',
            object2: 'age',
            object3: 'hairColor',
            object4: 'race',
            object5: '[]'
        }
        week2
            .setValue('@objectSearchBar', mySearches2.object1)
            .click('@objectButton')
            .waitForElementVisible('@objectSearchBar', mySearches2.object1)
            .clearValue('@objectSearchBar')
            .setValue('@objectSearchBar', mySearches2.object2)
            .click('@objectButton')
            .waitForElementVisible('@objectSearchBar', mySearches2.object2)
            .clearValue('@objectSearchBar')
            .setValue('@objectSearchBar', mySearches2.object3)
            .click('@objectButton')
            .waitForElementVisible('@objectSearchBar', mySearches2.object3)
            .clearValue('@objectSearchBar')
            .setValue('@objectSearchBar', mySearches2.object4)
            .click('@objectButton')
            .waitForElementVisible('@objectResults', mySearches2.object5)
            .clearValue('@objectSearchBar')
    },
    'Filter string test': browser => {
        var mySearches3 = {
            name1: 'James',
            name2: 'Rachel',
            filteredNames: '[]'
        }
        week2
            .setValue('@stringSearchBar', mySearches3.name1)
            .click('@stringButton')
            .waitForElementVisible('@stringSearchBar', mySearches3.name)
            .pause(5000)
            .clearValue('@stringSearchBar')
            .setValue('@stringSearchBar', mySearches3.name2)
            .click('@stringButton')
            .waitForElementVisible('@stringResults', mySearches3.filteredNames)
            .pause(5000)    
    },
    'Palindrome test': browser => {
        var mySearches4 = {
            value1: 'hannah',
            value2: 'water',
        }
        week2
            .setValue('@palindromeSearchBar', mySearches4.value1)
            .click('@palindromeButton')
            .waitForElementVisible('@palindromeSearchBar', mySearches4.value1)
            .pause(5000)
            .clearValue('@palindromeSearchBar')
            .setValue('@palindromeSearchBar', mySearches4.value2)
            .click('@palindromeButton')
            .waitForElementVisible('@palindromeSearchBar', mySearches4.value2)
            .pause(5000)
    },
    'Sum test': browser => {
        var mySearches5 = {
            number1: '56',
            number2: '3',
            number3: '59',
            entry1: '.e',
            entry2: 'NaN'
        }
        week2
            .setValue('@sumSearchBar1', mySearches5.number1)
            .setValue('@sumSearchBar2', mySearches5.number2)
            .click('@addButton')
            .waitForElementVisible('@sumResults', mySearches5.number3)
            .pause(5000)
            .clearValue('@sumSearchBar1','@sumSearchBar2')
            .setValue('@sumSearchBar1', mySearches5.entry1)
            .setValue('@sumSearchBar2', mySearches5.entry1)
            .click('@addButton')
            .waitForElementVisible('@sumResults', mySearches5.entry2)
            .pause(5000)
    }
}