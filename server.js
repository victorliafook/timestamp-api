var express = require('express');


var app = express();
app.get('/:par', function(req, res){
   
    var time = new TimeObj();
    var date = Date.parse(req.params.par);
    
    if(isNaN(date)){
        date = new Date(parseInt(req.params.par));
        if(!isNaN( date.getTime())){
            time.unix = date.getTime();
            time.natural = date.toDateString();
        }
    }else{
        time.unix = date;
        time.natural = new Date(date).toDateString();
    }
   
    res.json(time);
})
app.listen(8081);


function TimeObj(){
    this.unix = null;
    this.natural = null;
}