describe("Memory Game", function () {

    jasmine.getEnv().configure({ random: false }); //testing is supposed to test end-to-end user story, Jasmine's option to run tests in random order is disabled.


    //Testing fitToScreen function: function should calculate width of square-shaped play board based on screen size
    describe("fitToScreen Function", function () {

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            fitScreen = new fitToScreen();
        });

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

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            ajdustFont = new adjustFontSize();
        });

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

    //To make sure the game has fluent responsive design, window resize funtion is created 
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
                expect(adjustFontSize).toHaveBeenCalledWith($(window).width(), $(window).height());
            });
        });
    });

    //On load function is responsible for initial screen setup when the page is loaded
    describe("On Load Setup - onLoad() function", function () {

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            OnLoad = new onLoad();
        });

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
            expect(adjustFontSize).toHaveBeenCalledWith($(window).width(), $(window).height());
        });

        it("With onLoad() function, createIntroPage() function should be called", function () {
            createIntroPage = jasmine.createSpy();
            onLoad();
            expect(createIntroPage).toHaveBeenCalled();
        });
    });

    describe("createIntroPage function", function () {

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            introPage = new createIntroPage();
        });

        describe("Should create intro page HTML elements", function () {
            it("Should be defined", function () {
                expect(typeof createIntroPage).toBe('function');
            });

            it("Should set score board visibility to hidden", function () {
                expect(scoreBoard.style.visibility).toBe("hidden");
            });

            it("Should set home button visibility to hidden", function () {
                expect(homeButton.style.visibility).toBe("hidden");
            });

            it("Should create respective HTML elements with corresponding classes and ids", function () {
                expect($('.introduction')).toExist();
                expect($('#normalMode')).toExist();
                expect($('#challengeMode')).toExist();
            });

            it("Click on 'Normal Mode' button should trigger createDifficultyPage() and change 'challengeMode' variable to 0", function () {
               createDifficultyPage = jasmine.createSpy();
               $('#normalMode').click();
               expect(createDifficultyPage).toHaveBeenCalled();
               expect(challengeMode).toBe(0);
            });

            it("Click on 'Challenge Mode' button should trigger createDifficultyPage() and change 'challengeMode' variable to 1", function () {
               createDifficultyPage = jasmine.createSpy();
               $('#challengeMode').click();
               expect(createDifficultyPage).toHaveBeenCalled();
               expect(challengeMode).toBe(1);
            });
            
        });
    });

    describe("createDifficultyPage function", function () {

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            difficultyPage = new createDifficultyPage();
        });

        describe("Should create difficulty page HTML elements", function () {
            it("Should be defined", function () {
                expect(typeof createDifficultyPage).toBe('function');
            });

            it("Should set score board visibility to hidden", function () {
                expect(scoreBoard.style.visibility).toBe("hidden");
            });

            it("Should set home button visibility to visible", function () {
                expect(homeButton.style.visibility).toBe("visible");
            });

            it("Should create respective HTML elements with corresponding classes", function () {
                expect($('.difficulty1')).toExist();
                expect($('.difficulty2')).toExist();
                expect($('.difficulty3')).toExist();
                expect($('.difficulty4')).toExist();
            });

            it("Normal Mode: Click on '16 Cards' button should trigger opening game page with 16 cards, time display is set to 00:00:00", function () {
               createGamePage = jasmine.createSpy();
               challengeMode = 0;
               $('.difficulty1').click();
               expect(createGamePage).toHaveBeenCalled();
               expect(createGamePage).toHaveBeenCalledWith(16);
               expect(timeDisplay.textContent).toBe('00:00:00');
            });

            it("Normal Mode: Click on '36 Cards' button should trigger opening game page with 36 cards, time display is set to 00:00:00", function () {
               createGamePage = jasmine.createSpy();
               challengeMode = 0;
               $('.difficulty2').click();
               expect(createGamePage).toHaveBeenCalled();
               expect(createGamePage).toHaveBeenCalledWith(36);
               expect(timeDisplay.textContent).toBe('00:00:00');
            });

            it("Normal Mode: Click on '64 Cards' button should trigger opening game page with 64 cards, time display is set to 00:00:00", function () {
               createGamePage = jasmine.createSpy();
               challengeMode = 0;
               $('.difficulty3').click();
               expect(createGamePage).toHaveBeenCalled();
               expect(createGamePage).toHaveBeenCalledWith(64);
               expect(timeDisplay.textContent).toBe('00:00:00');
            });

            it("Normal Mode: Click on '100 Cards' button should trigger opening game page with 100 cards, time display is set to 00:00:00", function () {
               createGamePage = jasmine.createSpy();
               challengeMode = 0;
               $('.difficulty4').click();
               expect(createGamePage).toHaveBeenCalled();
               expect(createGamePage).toHaveBeenCalledWith(100);
               expect(timeDisplay.textContent).toBe('00:00:00');
            });

            it("Challenge Mode: Click on '16 Cards' button should trigger opening game page with 16 cards, time display is set to 00:01:00", function () {
               createGamePage = jasmine.createSpy();
               challengeMode = 1;
               $('.difficulty1').click();
               expect(createGamePage).toHaveBeenCalled();
               expect(createGamePage).toHaveBeenCalledWith(16);
               expect(timeDisplay.textContent).toBe('00:01:00');
               expect(totalTimeToGo).toBe(60);
            });

            it("Challenge Mode: Click on '36 Cards' button should trigger opening game page with 36 cards, time display is set to 00:02:00", function () {
               createGamePage = jasmine.createSpy();
               challengeMode = 1;
               $('.difficulty2').click();
               expect(createGamePage).toHaveBeenCalled();
               expect(createGamePage).toHaveBeenCalledWith(36);
               expect(timeDisplay.textContent).toBe('00:02:00');
               expect(totalTimeToGo).toBe(120);
            });

            it("Challenge Mode: Click on '64 Cards' button should trigger opening game page with 64 cards, time display is set to 00:04:00", function () {
               createGamePage = jasmine.createSpy();
               challengeMode = 1;
               $('.difficulty3').click();
               expect(createGamePage).toHaveBeenCalled();
               expect(createGamePage).toHaveBeenCalledWith(64);
               expect(timeDisplay.textContent).toBe('00:04:00');
               expect(totalTimeToGo).toBe(240);
            });

            it("Challenge Mode: Click on '100 Cards' button should trigger opening game page with 100 cards, time display is set to 00:07:00", function () {
               createGamePage = jasmine.createSpy();
               challengeMode = 1;
               $('.difficulty4').click();
               expect(createGamePage).toHaveBeenCalled();
               expect(createGamePage).toHaveBeenCalledWith(100);
               expect(timeDisplay.textContent).toBe('00:07:00');
               expect(totalTimeToGo).toBe(420);
            });   
        });
    });
});

