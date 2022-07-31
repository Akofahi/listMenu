const express = require("express")


const app = express();
let myItem =[];

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
        kindOfDay: day ,nameItem: myItem});
})

app.post("/",function(request,respone){
    let item = request.body.nameItem;
    myItem.push(item)
    respone.redirect("/");
    
})

app.listen(3000, function () {
    console.log("server 3000")
})