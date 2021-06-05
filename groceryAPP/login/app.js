var express = require('express');
var app = express();
var fs = require('fs')
// const bodyParser = require('body-parser');
var port = 5555;

var users = require('./json/users.json');

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.get('', (req, res) => {
    res.render('register.html')
})
app.get('/index', (req, res) => {
    res.render('index.html')
})

app.get('/register', (req, res) => {
    res.render('register.html')
})
app.post('/register', (req, res) => {
    console.log(req.body)
    var username = req.body.username;
    var password = req.body.password;
    users = JSON.stringify(users);
    users = JSON.parse(users);
    var usernameExist = false;
    for (var i=0; i < users.length; i++){
      if(users[i]["username"] == username){
        usernameExist = true;
      }
    } 
    if (usernameExist){
       result = {"result": false, "msg": "Username already exist. Try Login!"};
    }else{
      users.push({"username": username, "password": password});
      users = JSON.stringify(users);
      fs.writeFileSync('json/users.json', users);
      // result = {"result": true, "msg": "Username does not exist!"};
      res.redirect('/login')
    }
    res.json(result);
})

app.get('/login', (req, res) => {
    res.render('login.html')
})

app.post('/login', (req, res) => {
  // console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    var result = null;
    for (var i=0; i < users.length; i++){
      if(users[i]["username"] == username && users[i]["password"] == password){
        result = true;
        res.redirect('/index')
        return true;
      }else{
         result = false;
      }
    }
    res.json({"result": result});
  });

app.listen(port, () => {
  console.log(`Backend of Bookstore is listening at http://localhost:${port}`);
})