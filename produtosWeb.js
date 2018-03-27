let express =  require('express');
let app = express();


app.set('view engine','ejs')

app.get('/produto', (req,res) => {
    res.render('produto/lista');
});

app.listen(3000, () => console.log("Servidor rodando"));

