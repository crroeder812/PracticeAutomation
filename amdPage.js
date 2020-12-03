var commandsOne = {
    ifIsPresent: function(elementInQuestion){
        this
            this.api.elements(elementInQuestion, results =>{
                if (results.value.length > 0) {
                    this.click(elementInQuestion)
                }
                else {
                    console.log("Intended Element does NOT Exist, continuing test...")}
            return this
        });
    }    
}
module.exports = {
    url: 'https://www.amd.com/en',
    commands: [commandsOne],
    elements: {
        // search bar test selectors
        loadSearchBar: 'i[class="fa fa-search-toggle"]',
        searchBar: 'input[id="edit-keyword"]',
        search: 'input[id="edit-submit-acquia-search"]',
        homepageButton: 'a[class="site-logo"]',
        graphicsResults: 'a[href="/en/partner/graphics"]',
        invalidResult: 'div[class="view-empty"]',
        // learn more test selectors
        learnMoreResult: 'div[class="block block-core block-page-title-block col-sm-9"]',
        learnMore1: 'a[href="/en/graphics/amd-radeon-rx-6000-series"]',
        learnMore2: 'a[href="/en/products/server-accelerators/instinct-mi100"]',
        learnMore3: 'a[href="/en/technologies/cdna"]',
        learnMore4: {
            selector: '(//a[@href="/en/graphics/servers-solutions-rocm"])[3]',
            locatorStrategy: 'xpath'
        },
        learnMore5: 'a[href="/en/campaigns/high-performance-computing"]',
        learnMore6: '(a[href="/en/processors/ryzen"])[2]',
        learnMore7: 'a[href="/en/processors/embedded-ryzen-v2000-series"]',
        learnMore8: 'a[href="/en/technologies/rdna-2"]',
        learnMore9: 'a[href="/en/gaming/amd-fortnite-island-for-fans-with-fans"]',
        learnMore10: 'a[href="/en/gaming/ultimate-gaming-desktop-platform"]',
        learnMore11: 'a[href="/en/products/embedded-minipc-solutions#Vertical-Solutions---"]',
        learnMore12: 'a[href="/en/corporate-responsibility"]',
        learnMore13: 'a[href="/en/corporate/hpc-fund"]',
        learnMore14: 'a[href="/en/processors/epyc-for-hyperconverged-infrastructure?utm_content=can"]',
        learnMore15: 'a[href="/en/gaming/equipped-to-win"]',
        learnMore16: 'a[href="/en/gaming/raise-the-game"]',
        learnMore17: 'a[href="/en/technologies/radeon-software"]',
        learnMore18: 'a[href="/en/gaming/world-of-warcraft-shadowlands"]',
        learnMore19: 'a[href="/en/gaming/riftbreaker"]',
        learnMore20: 'a[href="/en/gaming/far-cry-6"]',
        popUpClose: 'button[class="fsrInvite__closeWrapper fsrAbandonButton"]',
        popUpNoThanks: 'button[class="fsrButton fsrButton__inviteDecline fsrDeclineButton"]'
    }    
}