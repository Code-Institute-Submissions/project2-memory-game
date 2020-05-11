describe("Memory Game", function () {

    jasmine.getEnv().configure({ random: false }); //testing is supposed to test end-to-end user story, Jasmine's option to run tests in random order is disabled.

    beforeAll(function () {
        jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
        loadFixtures('htmlFixture.html');
    });

    //Testing fitToScreen function: function should calculate width of square-shaped play board based on screen size
    describe("fitToScreen Function", function () {

        describe("Should calculate the size of the game-board to fit the screen", function () {
            it("Should be defined", function () {
                expect(typeof fitToScreen).toBe('function');
            });

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

    //Testing adjustFotSize function: function should html root font size based on screen size
    describe("adjustFontSize Function", function () {

        describe("Should calculate the root font size fit the screen", function () {
            it("Should be defined", function () {
                expect(typeof adjustFontSize).toBe('function');
            });

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

    //To meka sure the game has fluent responsive design, window resize funtion is created 
    describe("Window resize action", function () {
        const spy = jasmine.createSpy();
        const testWidth = 420;

        beforeAll(function () {
            window.addEventListener('resize', spy);
        });

        it('does not fire resize event by default', function () {
            expect(spy).not.toHaveBeenCalled();
            expect(window.innerWidth).not.toBe(testWidth);
        });

        describe('when resize event is fired', function () {
            beforeAll(function () {
                window.innerWidth = testWidth;
                window.dispatchEvent(new Event('resize'));
            });

            it('updates the window width', function () {
                expect(spy).toHaveBeenCalled();
                expect(window.innerWidth).toBe(testWidth);
            });

            it("fitToScreen() function should be called", function () {
                fitToScreen = jasmine.createSpy();
                window.dispatchEvent(new Event('resize'));
                expect(fitToScreen).toHaveBeenCalled();
                expect(fitToScreen).toHaveBeenCalledWith($(window).width(), $(window).height());
            });

            it("adjustFontSize() function should be called", function () {
                adjustFontSize = jasmine.createSpy();
                window.dispatchEvent(new Event('resize'));
                expect(adjustFontSize).toHaveBeenCalled();
                expect(fitToScreen).toHaveBeenCalledWith($(window).width(), $(window).height());
            });
        });
    });

    //On load function is responsible for initial screen setup when the page is loaded
    describe("On Load Setup - onLoad() function", function () {

        it("Should be defined", function () {
            expect(typeof onLoad).toBe('function');
        });

        it("With onLoad() function, fitToScreen() function should be called", function () {
            fitToScreen = jasmine.createSpy();
            onLoad();
            expect(fitToScreen).toHaveBeenCalled();
            expect(fitToScreen).toHaveBeenCalledWith($(window).width(), $(window).height());
        });

        it("With onLoad() function, adjustFontSize() function should be called", function () {
            adjustFontSize = jasmine.createSpy();
            onLoad();
            expect(adjustFontSize).toHaveBeenCalled();
            expect(fitToScreen).toHaveBeenCalledWith($(window).width(), $(window).height());
        });

        it("With onLoad() function, createIntroPage() function should be called", function () {
            createIntroPage = jasmine.createSpy();
            onLoad();
            expect(createIntroPage).toHaveBeenCalled();
        });
    });

    describe("createIntroPage function", function () {

        beforeAll(function () {
            $('#fixture').remove();
            $.ajax({
                async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
                dataType: 'html',
                url: 'assets/specs/fixtures/htmlFixture2.html',
                success: function (data) {
                    $('body').append($(data));
                }
            });
        });

        
        describe("Should create card elements in HTML", function () {
            it("Should be defined", function () {
                expect(typeof createIntroPage).toBe('function');
            });

            it("Should set score board visibility to hidden", function () {
                expect(scoreBoard.style.visibility).toBe("hidden");
            });

            it("Should set score board visibility to hidden", function () {
                expect(homeButton.style.visibility).toBe("hidden");
            });

            it("Should create respective HTML elements with corresponding classes", function () {
                createIntroPage();
                expect(document.querySelectorAll('.grid').length).toBe(1);
            });
        });
    });
});