var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 80);

app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'));
});