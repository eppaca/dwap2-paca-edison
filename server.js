const express = require('express')
const app = express()

const hbs = require('hbs');
const port = process.env.PORT || 3000;
app.use( express.static(__dirname + '/public'));

/*Express HBS view engine*/
hbs.registerPartials(__dirname + '/views/partials');

var json = require("./data/datos.json");

hbs.registerHelper("produc",()=>{
    var pro = JSON.stringify(json);
    var pro2 = JSON.parse(pro);
    let out ="";
    for (let i = 0; i < pro2.length; i++) {
        out= out+'<div class="col-lg-4 menu-item filter-starters"><img src="'+pro2[i].img+'" class="menu-img" alt=""/> <div class="menu-content"> <a href="#">'+pro2[i].tipo+'</a><span>'+pro2[i].precio+'</span>'
        +'</div>'
            
        +'<div class="menu-ingredients">'
        +pro2[i].descrip
        +'</div>'
        +'</div>'
        
    }
    return out;
})

app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('home');
})

app.listen(port, ()=>{
    console.log(`Escuchando peticiones del puerto ${port}`)
});