describe("Memory Game", function () {

    beforeAll(function () {
        jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
        loadFixtures('htmlFixture.html');
    });

    describe("On Load Setup", function () {

        it("With onLoad() function, fitScreen() function should be called", function () {
            fitScreen = jasmine.createSpy();
            onLoad();
            expect(fitScreen).toHaveBeenCalled();
        });

        it("With onLoad() function, createIntroPage() function should be called", function () {
            createIntroPage = jasmine.createSpy();
            onLoad();
            expect(createIntroPage).toHaveBeenCalled();
        });

    });

    describe("fitScreen Function", function () {

        it("Game area and html root font size should adjust to smaller of screen width and screen height - smaller height", function () {
            var winWidth = 1000;
            var winHeight = 500;
            fitScreen(winWidth, winHeight);
            var result1 = square.style.width;
            var result2 = jQuery('html').css('font-size');
            expect(result1).toBe('40%');
            expect(result2).toBe('25.6px');
        });

        it("Game area and html root document font size should adjust to smaller of screen width and screen height - smaller width", function () {
            var winWidth = 500;
            var winHeight = 1000;
            fitScreen(winWidth, winHeight);
            var result1 = square.style.width;
            var result2 = jQuery('html').css('font-size');
            expect(result1).toBe('100%');
            expect(result2).toBe('64px');
        });
    });

});