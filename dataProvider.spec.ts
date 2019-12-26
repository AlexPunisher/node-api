import * as chai from 'chai';

const assert = chai.assert;

const testData = [0, 1, 2, 3, 4, 5];
const expectedResults = [0, 1, 8, 27, 64, 125];

function cubed(x){
    return x**3;
}

describe('Data provider pattern for tested function', () => {
    
    testData.forEach((el, ind) =>{
        it('should return correct result ' + el, () =>{
            assert.equal(cubed(el), expectedResults[ind], `Incorrect result for ${ind}th element`)
        });
    });
    
});

