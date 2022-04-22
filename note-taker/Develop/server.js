const express = require('express');
const PORT = process.env.PORT || 3001;;
const app = express();
const path = require("path"); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('./public/index.html')
})

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

