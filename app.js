const express = require('express');
const cors = require('cors');
const requestIp = require('request-ip');

const app = express();
const {log} = console;


app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));
app.enable('trust proxy');

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/view/index.html');
})

// api/whoami 
app.get('/api/whoami',(req,res)=>{

	const ipaddress = req.ip;
	const software = req.headers['user-agent'];
	const language = req.headers['accept-language'];

	res.json({ipaddress,software,language})
})


app.get('*',(req,res)=>{
	res.sendFile(__dirname+'/view/index.html');
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('app is listening on port ' + listener.address().port);
});