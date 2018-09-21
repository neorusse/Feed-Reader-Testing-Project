/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('Is Feed URLs defined', function () {
            for(let eachFeed of allFeeds) {
                // verify if eachFeed.url is defined    
                expect(eachFeed.url).toBeDefined();
                // check the length property of eachFeed.url
                expect(eachFeed.url.length).not.toBe(0);
            }

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('Is Feed Name defined', function () {
            for(let eachFeedName of allFeeds) {
                // verify if eachFeedName.name is defined    
                expect(eachFeedName.name).toBeDefined();
                // check the length property of eachFeedName.name
                expect(eachFeedName.name.length).not.toBe(0);
            }

        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('Hidden Menu Element by Default Settings', function () {
            // Return the value property of body tag class 
            const bodyTag = document.body.classList.value;
            // Verify the value property of body tag class
            expect(bodyTag).toContain('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('Toggles Menu on and off.', function () {
            $('.menu-icon-link').click();
            // on first click, menu should be visible
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            // on next click, menu should be hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });    
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, done);
        });

        it('Completion of work by LoadFeed function', function () {
            // length property must be greater than zero
            expect($('.feed .entry').length > 0).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
            let firstFeedHtml;

            beforeEach(function (done) {
            // load first feed
            loadFeed(0, function () {
                firstFeedHtml = $('.feed').html();

                // Load next feed
                loadFeed(1, function () {
                    done();
                });
            });

        });
        
        it('Content Change due to New Feed Loaded', function (done) {
            let nextFeedHtml = $('.feed').html();
            // testing both feed for difference
            expect(nextFeedHtml).not.toBe(firstFeedHtml);
            done();
        });
    });
}());
