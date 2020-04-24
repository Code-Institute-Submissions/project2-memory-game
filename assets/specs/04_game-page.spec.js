describe ("My shuffleArray function", function() {
    
    beforeEach(function() {
        shuffle = new shuffleArray([]);
    }); 

        describe("Returns shuffled array", function() {
            it("Should be defined", function() {
                expect(typeof shuffleArray).toBe('function');
            });

            it("Should return array", function() {
                var array = [0,1,2,3,4,5,6,7,8,9,10];
                var result = shuffleArray(array);
                expect(typeof result).toBe('object');
            });
            
            it("Should return shuffled array", function() {
                var array = [0,1,2,3,4,5,6,7,8,9,10];
                var arrayString = array.toString()
                var shuffledArrayString = shuffleArray(array).toString();
                expect(arrayString === shuffledArrayString).toBe(false);
            });

            it("Lenght of shuffled array should be same as lenght of original array", function() {
                var array = [0,1,2,3,4,5,6,7,8,9,10];
                var length1 = array.length;
                var length2 = shuffleArray(array).length;
                expect(length1 === length2).toBe(true);
            });

            it("Shuffled array contain same values as original array", function() {
                var array = [0,1,2,3,4,5,6,7,8,9,10];
                var shuffledArray = shuffleArray(array);
                expect(array.sort().join(',') === shuffledArray.sort().join(',')).toBe(true);
            });
        });
});