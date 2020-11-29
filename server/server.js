const express = require('express');
const app = express();
const path = require('path')
const publicPath= path.join(__dirname,'..','public','dist')
console.log(__dirname);
console.log(publicPath);
const PORT = process.env.PORT || 3000;
console.log(PORT);
app.use(express.static(publicPath));
app.get('*',(req,res) => {
    res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(PORT,() => {
    console.log('Server is up');
})