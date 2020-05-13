describe("Memory Game", function () {

    jasmine.getEnv().configure({ random: false }); //testing is supposed to test end-to-end user story, Jasmine's option to run tests in random order is disabled.


    //Testing fitToScreen function: function should calculate width of square-shaped play board based on the screen size
    describe("fitToScreen Function", function () {

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            fitScreen = new fitToScreen();
        });

        describe("fitToScreen() function should calculate the size of the game-board to fit the screen", function () {
            it("Should be defined", function () {
                expect(typeof fitToScreen).toBe('function');
            });

            it("Width of play board on the screen with smaller height", function () {
                var result = fitToScreen(1000, 500);
                expect(result).toBe('40%');
            });

            it("Widht of play board on the screen with smaller width", function () {
                var result = fitToScreen(500, 1000);
                expect(result).toBe('100%');
            });
        });
    });

    //Testing adjustFotSize function: function should calculate html root font size based on the screen size
    describe("adjustFontSize Function", function () {

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            ajdustFont = new adjustFontSize();
        });

        describe("adjustFontSize function should calculate the root font size to fit the screen", function () {
            it("Should be defined", function () {
                expect(typeof adjustFontSize).toBe('function');
            });

            it("Root font size on screen with smaller height", function () {
                var result = adjustFontSize(1000, 500);
                expect(result).toBe('0.8vw');
            });

            it("Root font size on screen with smaller width", function () {
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

    //createIntroPage function generates respective Intro Page html elements
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

            it("Should create respective HTML elements with corresponding classes and IDs", function () {
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

    //createDifficultyPage function generates respective Difficulty Page html elements
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

    //createGamePage calls sub-functions responsible for random selection of cards for the game and generates respective Game Page html elements
    describe("createGamePage function and other related sub-functions", function () {

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
        });

        //shuffleArray sub-function function randomly changes order of elements within array
        describe("My shuffleArray function", function () {


            beforeEach(function () {
                shuffle = new shuffleArray([]);
            });

            describe("Returns shuffled array", function () {
                it("Should be defined", function () {
                    expect(typeof shuffleArray).toBe('function');
                });

                it("Should return error if argument (array) is not passed", function () {
                    expect(function () { shuffleArray() }).toThrow(Error('array argument is not defined'));
                });

                it("Should return array", function () {
                    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    var result = shuffleArray(array);
                    expect(typeof result).toBe('object');
                });

                it("Should return shuffled array", function () {
                    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    var arrayString = array.toString()
                    var shuffledArrayString = shuffleArray(array).toString();
                    expect(arrayString === shuffledArrayString).toBe(false);
                });

                it("Lenght of shuffled array should be same as lenght of original array", function () {
                    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    var length1 = array.length;
                    var length2 = shuffleArray(array).length;
                    expect(length1 === length2).toBe(true);
                });

                it("Shuffled array contain same values as original array", function () {
                    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    var shuffledArray = shuffleArray(array);
                    expect(array.sort() === shuffledArray.sort()).toBe(true);
                });
            });
        });

        //cardsArray sub-function generates random array of cards for the game, lenght of array corresponds to number of cards selected by the player (i.e. difficulty level)
        describe("My cardsArray function", function () {

            beforeEach(function () {
                array = new cardsArray([]);
            });

            describe("Returns array of shuffled cards", function () {
                it("Should be defined", function () {
                    expect(typeof cardsArray).toBe('function');
                });

                it("Should return error if argument (numberOfCards) is not passed", function () {
                    expect(function () { cardsArray() }).toThrow(Error('numberOfCards argument is not defined'));
                });

                it("numberOfCards argument must be divisible by 2", function () {
                    expect(function () { cardsArray(3) }).toThrow(Error('numberOfCards argument must be divisible by 2'));
                });

                it("Length of Cards array should be equal to 'numberOfCards' argument", function () {
                    var numberOfCards = 10;
                    var lenghtOfCardsArray = cardsArray(10).length;
                    expect(numberOfCards === lenghtOfCardsArray).toBe(true);
                });

                it("Each record in the Cards array should be duplicated", function () {
                    var arrayOfCards = cardsArray(8).sort();
                    var card1 = arrayOfCards[0];
                    var card2 = arrayOfCards[1];
                    var card3 = arrayOfCards[2];
                    var card4 = arrayOfCards[3];
                    var card5 = arrayOfCards[4];
                    var card6 = arrayOfCards[5];
                    var card7 = arrayOfCards[6];
                    var card8 = arrayOfCards[7];
                    expect(card1 === card2 && card3 === card4 && card5 === card6 && card7 === card8).toBe(true);
                });
            });

        });

        //createGamePage function generates respective Difficulty Page html elements
        describe("My createGamePage function", function () {

            beforeEach(function () {
                game = new createGamePage([]);
            });

            describe("Should create card elements in HTML", function () {
                it("Should be defined", function () {
                    expect(typeof createGamePage).toBe('function');
                });
                
                it("Should set score board visibility to visible", function () {
                    expect(scoreBoard.style.visibility).toBe("visible");
                });

                it("Should set home button visibility to visible", function () {
                    expect(homeButton.style.visibility).toBe("visible");
                });

                it("Should return error if argument (numberOfCards) is not passed", function () {
                    expect(function () { createGamePage() }).toThrow(Error('numberOfCards argument is not defined'));
                });

                it("Passed argument must be divisible by 2", function () {
                    expect(function () { createGamePage(3) }).toThrow(Error('numberOfCards argument must be divisible by 2'));
                });

                it("Should create respective HTML elements with corresponding classes and attributes", function () {
                    game = new createGamePage(16);
                    expect($('.flipCardContainer').length).toBe(16);
                    expect($('.card').length).toBe(16);
                    expect($('.icon-size16').length).toBe(16);
                    expect($('.flipCard').length).toBe(16);
                    expect($('.frontSide').length).toBe(16);
                    expect($('.backSide').length).toBe(16);
                });

                it("Click on card should call 'flipCard()' function", function () {
                    flipCard = jasmine.createSpy();
                    game = new createGamePage(16);
                    $('[data-id="0"]').click();
                    $('[data-id="10"]').click();
                    $('[data-id="13"]').click();
                    $('[data-id="15"]').click();
                    expect(flipCard).toHaveBeenCalled();
                    expect(flipCard.calls.count()).toEqual(4);
                });
            });
        });
    });

    //Testing Game logic - flipCard function, checkForMatch function, stopwatch function and timer function
    describe("Game logic - flipCard function, checkForMatch function, stopwatch function and timer function", function () {
        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            createGamePage(6);
            jasmine.clock().install();
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        it("By clicking on two different cards, checkForMatch function should be initiated", function () {
            checkForMatch = jasmine.createSpy();
            $('[data-id="0"]').click();
            $('[data-id="1"]').click();
            jasmine.clock().tick(1000);
            expect(checkForMatch).toHaveBeenCalled();
        });

        it("Maximum of two cards should be flipped at once", function () {
            checkForMatch = jasmine.createSpy();
            cardsChosen = ['a', 'b'];
            cardsChosenId = [0, 1];
            $('[data-id="0"]').click();
            jasmine.clock().tick(1000);
            expect(checkForMatch).not.toHaveBeenCalled();
        });

        it("Cards with same picture should disappear and score display should be updated", function () {
            cards = document.querySelectorAll('.flipCardContainer');
            cardsChosen = ['a', 'a'];
            cardsChosenId = ['0', '1'];
            checkForMatch = new checkForMatch();
            expect(cards[0].style.visibility).toBe('hidden');
            expect(cards[1].style.visibility).toBe('hidden');
            expect(wonDisplay.textContent).toBe('1');
            expect(failDisplay.textContent).toBe('0');
        });

        it("Cards with different pictures should flip back and score display should be updated", function () {
            cards = document.querySelectorAll('.flipCardContainer');
            cardsChosen = ['a', 'b'];
            cardsChosenId = ['0', '1'];
            checkForMatch = new checkForMatch();
            expect(cards[0].style.visibility).toBe('');
            expect(cards[1].style.visibility).toBe('');
            expect(wonDisplay.textContent).toBe('0');
            expect(failDisplay.textContent).toBe('1');
        });

        it("If all cards are turned, createGameOverPage() should be called", function () {
            createGameOverPage = jasmine.createSpy();
            cards = document.querySelectorAll('.flipCardContainer');
            cardsChosen = ['a', 'a'];
            cardsChosenId = ['0', '1'];
            cardsWon = [['b', 'b'], ['c', 'c']];
            checkForMatch = new checkForMatch();
            expect(createGameOverPage).toHaveBeenCalled();
            expect(createGameOverPage).toHaveBeenCalledWith('won');
        });

        it("In 'Normal Mode', stopWatch() function should be called after the first card is flipped, timer() should not be called, other moves will not call stopWatch() again", function () {
            challengeMode = 0;
            firstMove = 0;
            stopWatch = jasmine.createSpy();
            timer = jasmine.createSpy();
            $('[data-id="0"]').click();
            $('[data-id="1"]').click();
            $('[data-id="2"]').click();
            expect(stopWatch.calls.count()).toEqual(1);
            expect(timer.calls.count()).toEqual(0);
            expect(firstMove).toBe(1);
        });

        it("In 'Challenge Mode', stopWatch() and timer() function should be called after the first card is flipped, other moves will not call stopWatch() and timer() again", function () {
            challengeMode = 1;
            firstMove=0;
            stopWatch = jasmine.createSpy();
            timer = jasmine.createSpy();
            $('[data-id="0"]').click();
            $('[data-id="1"]').click();
            $('[data-id="2"]').click();
            expect(stopWatch.calls.count()).toEqual(1);
            expect(timer.calls.count()).toEqual(1);
            expect(firstMove).toBe(1);
        });

        it("After the first call, stopWatch() function should be called automatically every second and update Time Display in Normal Mode and save elapsed time to variable in Challenge Mode", function () {
            timeDisplay = $('#time');
            firstMove=0;
            challengeMode = 0;

            secondsElapsed = 0;
            minutesElapsed = 0;
            hoursElapsed = 0;

            $('[data-id="0"]').click();
            $('[data-id="1"]').click();
            $('[data-id="2"]').click();
            
            jasmine.clock().tick(6000);
            expect(timeDisplay.textContent).toBe('00:00:06');
            expect(timeElapsed).toBe('00:00:06');

            challengeMode = 1;
            jasmine.clock().tick(6000);
            expect(timeDisplay.textContent).toBe('00:00:06');
            expect(timeElapsed).toBe('00:00:12');

        });

        it("In Challenge Mode after the first call, timer() function should be called every second and update time display; after set time expires 'createGameOverPage()' function to be called with 'lost' parameter.", function () {
            createGameOverPage = jasmine.createSpy();
            firstMove=0;
            challengeMode = 1;
            
            timeDisplay = $('#time');
            
            secondsToGo = 0;
            minutesToGo = 10;
            hoursToGo = 0;

            totalTimeToGo = hoursToGo * 3600 + minutesToGo * 60 + secondsToGo;

            $('[data-id="0"]').click();
            $('[data-id="1"]').click();
            $('[data-id="2"]').click();


            
            jasmine.clock().tick(6000);
            expect(timeDisplay.textContent).toBe('00:09:54');

            jasmine.clock().tick(593999);
            expect(timeDisplay.textContent).toBe('00:00:01');

            jasmine.clock().tick(1000);
            expect(timeDisplay.textContent).toBe('EXPIRED');
            expect(createGameOverPage).toHaveBeenCalled;
            expect(createGameOverPage).toHaveBeenCalledWith('lost');
        });
    });

    //createGameOverPage function generates respective Game Over Page html elements
    describe("createGameOverPage function", function () {

        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'assets/specs/fixtures';
            loadFixtures('htmlFixture.html');
            introPage = new createGameOverPage();
        });

        describe("Should create Game Over page HTML elements", function () {
            it("Should be defined", function () {
                expect(typeof createGameOverPage).toBe('function');
            });

            it("Should set score board visibility to hidden", function () {
                expect(scoreBoard.style.visibility).toBe("hidden");
            });

            it("Should set home button visibility to visible", function () {
                expect(homeButton.style.visibility).toBe("visible");
            });

            it("Should create respective HTML elements with corresponding classes and IDs", function () {
                expect($('.gameOver')).toExist();
                expect($('.newGame')).toExist();
            });

            it("Click on 'New Game' button should take player to the IntroPage", function () {
                expect($('.newGame')).toHaveAttr('href', 'index.html');
            });

            it("Should display 'Game Over' final score if createGameOverPage is called with attribute 'lost'", function() {
                introPage = new createGameOverPage('lost');
                expect($('.gameOver').html()).toContain('GAME OVER!');
            })

            it("Should display 'Contratulations' final score if createGameOverPage is called with attribute 'won'", function() {
                introPage = new createGameOverPage('won');
                expect($('.gameOver').html()).toContain('CONGRATULATIONS!');
            })
        });
    });
});

