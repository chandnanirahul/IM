/*template name*/

var cmeiData = require('../../cmei_json/cmeiSampleResponse.json');

function cmeiRep(){
    var data ='';
   // console.log(process.env.CMEI_MOCK);
    if (process.env.CMEI_MOCK) {
        data = cmeiData;
       // console.log(process.env.CMEI_MOCK);
    } else {
        /*Yet to be coded*/
       /*  var options = {
            host: '',
            path: 'https://truenorth.cmie.com/kommon/bin/sr.php?kall=wshreport&format=json&template=XXXX&cocode=72607',
            method: 'POST'
        }
        
        var req = http.request(options, function (res) {
            var body = "";
            var cmeiData;
            res.on('data', function (data) {
                console.log('data came');
                body += data;
            });
            res.on('end', function () {
                cmeiData = JSON.parse(body);
                response.send(maybe);
            });
        }); */
    }
    return data;
}

module.exports = cmeiRep();


    

