// Uncomment these imports to begin using these cool features!

import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/core';
const https = require('https');

// import {inject} from '@loopback/core';



export class TestControllerController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}



  @get('/hello')
  name() : object {

    return this.getGitHubInfoFromAPi();
  }

  /**
   *
   */
  getGitHubInfoFromAPi(){
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: '/users/bmizerany',
      headers: {
        'User-Agent': ''
      }
    }
    return new Promise((resolve, reject)=>{
      https.get(options, function(resp) {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          console.log(JSON.parse(data));
          resolve(data);
        });
      }).on('error', function(e) {
        console.log("Got error: " + e.message);
        reject(e);
      });
    });
  }
}
