var request = require('request');

var img_list = [];

module.exports = {
    
    getID: function(URL, callback) {
        request('http://www.madhacks.org', function (error, response, body) {
          if (!error && response.statusCode == 200) {
              var page_lines = body.split('\n');
              for (let i = 0; i < page_lines.length; i++) {
                  if (page_lines[i].indexOf("<img") != -1){
                      
                      var new_image = {};
                      
                      //ignore this substring search
                      //not my best work
                      new_image.image_tag = page_lines[i].substring(page_lines[i].indexOf("<img"), page_lines[i].substr("<img").indexOf(">") + 1);
                      console.log(new_image.image_tag);
                      
                      new_image.source = new_image.image_tag.substr(new_image.image_tag.indexOf("src=\"") + 5);
                      new_image.source = new_image.source.substring(0, new_image.source.indexOf("\""));
                      
                      if (new_image.image_tag.indexOf("id=\"") != -1 ){
                        new_image.id = new_image.image_tag.substr(new_image.image_tag.indexOf("id=\"") + 4);
                        new_image.id = new_image.id.substring(0, new_image.id.indexOf("\""));
                      }
                      
                      if (new_image.image_tag.indexOf("class=\"") != -1 ){
                        new_image.class = new_image.image_tag.substr(new_image.image_tag.indexOf("class=\"") + 7);
                        new_image.class = new_image.class.substring(0, new_image.class.indexOf("\""));
                      }
                  }
              }
              callback(body);            
          } else {
            callback("", "error getting page");
          }
        })
    }
};


                        
               