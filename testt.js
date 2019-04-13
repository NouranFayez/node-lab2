const finalhandler = require('finalhandler')
const http = require('http')
const Router = require('router')
const fs = require('fs');

const router = Router()
router.get('/', function (req, res) {
    
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
  
    fs.readdir('./images', function (err, items) {
        console.log(items)
        res.end(JSON.stringify(items))
    }

    )
})

router.get('/folder/:index', function (req, res) {
    
    fs.readFile(`./images/${req.params.index}`, (err, data) => {
        if (err) throw err;
        res.end(data);
      });
     }
)

const server = http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
})

server.listen(3000)

//     res.end('hey nouran')
// });
// let file= Fs.readdirSync('./images', function (err, items) {
//     console.log(items)
//     res.end(JSON.stringify(items))
// })

// let fileName=fs.rename('./images/tt.jpg', './images/tt2.jpg', function(err) {
//     if ( err ) console.log('ERROR: ' + err);
// });
// server.listen(3000);
// console.log(file)
// console.log('welcome')

// const file = fs.readFileSync('./operations/sub.js' , {
//     encoding:"ascii"
// });
debugger;

// console.log ('jjjjj')


