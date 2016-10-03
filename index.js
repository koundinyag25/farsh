var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var windTurbineData = function(){
  request('http://mybergey.aprsworld.com/data/jsonMyBergey.php?station_id=A4447',
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('boop',response.body);

     fs.writeFile('./data.txt',response.body,function(err){
  	   if(err){
               console.log(err);
             }
            console.log('file written');
        });
    }
  });
}

setInterval(windTurbineData,11000);



app.listen('3000',function(){
  console.log('listening on port 3000');
});
