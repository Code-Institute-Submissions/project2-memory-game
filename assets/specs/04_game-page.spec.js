describe("Memory Game", function () {

    // Loading DOM fixtures
    beforeAll(function () {
        $('#fixture').remove();
        $.ajax({
            async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
            dataType: 'html',
            url: 'assets/specs/htmlFixture.html',
            success: function (data) {
                $('body').append($(data));
            }
        });
    });

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

    describe("My createGamePage function", function () {

        beforeEach(function () {
            game = new createGamePage([]);
        });

        describe("Should create card elements in HTML", function () {
            it("Should be defined", function () {
                expect(typeof createGamePage).toBe('function');
            });

            it("Should return error if argument (numberOfCards) is not passed", function () {
                expect(function () { createGamePage() }).toThrow(Error('numberOfCards argument is not defined'));
            });

            it("Should argument must be divisible by 2", function () {
                expect(function () { createGamePage(3) }).toThrow(Error('numberOfCards argument must be divisible by 2'));
            });

            it("Should create respective HTML elements with corresponding classes", function () {
                game = new createGamePage(16);
                expect(document.querySelectorAll('#fixture .flipCardContainer').length).toBe(16);
                expect(document.querySelectorAll('#fixture .card').length).toBe(16);
                expect(document.querySelectorAll('#fixture .icon-size16').length).toBe(16);
                expect(document.querySelectorAll('#fixture .flipCard').length).toBe(16);
                expect(document.querySelectorAll('#fixture .frontSide').length).toBe(16);
                expect(document.querySelectorAll('#fixture .backSide').length).toBe(16);
            });

            
        });


    });

});