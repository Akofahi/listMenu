const express = require("express")


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.get("/", function (req, res) {

    let today = new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    let day = today.toLocaleDateString("en-US",options)

    res.render('list', {
        kindOfDay: day
    });
})

app.post("/",function(request,respone){
    console.log(request.body.nameItem)
})

app.listen(3000, function () {
    console.log("server 3000")
})