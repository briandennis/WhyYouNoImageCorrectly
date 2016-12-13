var request = require('request');

module.exports = {
    
    getPage: function(URL, callback) {
        request('http://www.madhacks.org', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            callback(body);            
          } else {
              
          }
        })
    },
    
    findTag: function(tag) {
     
    }
};


                        
               