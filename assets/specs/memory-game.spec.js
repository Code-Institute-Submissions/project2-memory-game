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

        it("Game area should adjust to smaller of screen width and screen height", function () {
            spyOnProperty($(window), 'width').and.returnValue(1000);
            spyOnProperty($(window), 'height').and.returnValue(500);
            fitScreen();
            expect(square.style.width).toBe('40%');
        });
    });

});