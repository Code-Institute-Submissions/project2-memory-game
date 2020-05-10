describe("Memory Game", function () {

jasmine.getEnv().configure({random:false});

    beforeAll(function () {
        $('#fixture').remove();
        $.ajax({
            async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
            dataType: 'html',
            url: 'assets/specs/fixtures/htmlFixture.html',
            success: function (data) {
                $('body').append($(data));
            }
        });
    });

    describe("fitToScreen Function", function () {

        describe("Should calculate the size of the game-board to fit the screen", function () {
            it("Screen with smaller height", function () {
                var result = fitToScreen(1000, 500);
                expect(result).toBe('40%');
            });

            it("Screen with smaller width", function () {
                var result = fitToScreen(500, 1000);
                expect(result).toBe('100%');
            });
        });
    });

    describe("adjustFontSize Function", function () {

        describe("Should calculate the root font size fit the screen", function () {

            it("Screen with smaller height", function () {
                var result = adjustFontSize(1000, 500);
                expect(result).toBe('0.8vw');
            });

            it("Screen with smaller width", function () {
                var result = adjustFontSize(500, 1000);
                expect(result).toBe('2vw');
            });
        });
    });

    describe("On Load Setup", function () {

        it("With onLoad() function, fitToScreen() function should be called", function () {
            fitToScreen = jasmine.createSpy();
            onLoad();
            expect(fitToScreen).toHaveBeenCalled();
        });

        it("With onLoad() function, adjustFontSize() function should be called", function () {
            adjustFontSize = jasmine.createSpy();
            onLoad();
            expect(adjustFontSize).toHaveBeenCalled();
        });

        it("With onLoad() function, createIntroPage() function should be called", function () {
            createIntroPage = jasmine.createSpy();
            onLoad();
            expect(createIntroPage).toHaveBeenCalled();
        });

    });

    

});