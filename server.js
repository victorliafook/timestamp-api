var express = require('express');

console.log(process.env.PORT);
var app = express();
//JS works with millisseconds in their Date methods. Unix time is in seconds.
app.get('/:par', function(req, res){
   
    var time = new TimeObj();
    var date = Date.parse(req.params.par);
    
    if(!isNaN(date)){
        time.unix = date / 1000;
        time.natural = new Date(date).toDateString();
    }else{
        date = new Date(parseInt(req.params.par * 1000));
        if(!isNaN( date.getTime())){
            time.unix = date.getTime() / 1000;
            time.natural = date.toDateString();
        }
    }
   
    res.json(time);
})
app.listen(process.env.PORT || 8081);


function TimeObj(){
    this.unix = null;
    this.natural = null;
}