import * as request from 'request-promise-native';

export class Request {
    private option;

    constructor() {
        this.option = {
            "url":"",
            "method": "",
            "json": true,
            "resolveWithFullResponse": true, // Get full response, not only body
            "headers": {
              "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36",
              "Content-Type":"application/json"              
            },
            "body":{}
          };

    }
    
    url(url: string){
        this.option.url = url;
        return this;
    }

    method(method : 'GET' | 'POST' | 'PUT' | 'DELETE'){
        this.option.method = method;
        return this; 
    }
    
    setBodyParameter(param: string, value: string) {
        this.option.body[param] = value;
        return this;
    }

    send(){
        return request(this.option);
    }

}