import {Request} from './request'; 
import * as chai from 'chai';

const assert = chai.assert;
const request = new Request();

describe('Http request testing', () => {

    it.skip('should POST 200 response',  async () => {
        let res = await request
            .url('https://api.spotify.com/v1/me')
            .method('POST')
            .send();
        console.log(res.body);

        assert.lengthOf(res.body.searchId, 36, 'No search id');
        assert.typeOf(res.body.searchId, 'string', 'Invalid format');                                          
    });
    
    it('should GET 200 response', async () => {
        try {
        var res = await request
            .url('https://api.spotify.com/v1/me')
            .method('GET')
            .send();
        }
        catch(err){
            console.log(err.statusCode, err.message);
            assert.equal(err.statusCode, 400, 'Incorrect status code')
        }      
    });
    
})