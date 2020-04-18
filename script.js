const path = require("path");
const express = require("express");
const hbs = require("hbs");
const LoadData = require("./Modules/Access");
const fs = require("fs");
var bodyParser = require("body-parser");
const app = express();
path_jsonfile = "DATA/reservation.json";
var data = LoadData.LoadJson(path_jsonfile);



app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use("/DATA", express.static("./DATA"));

const publicDirectoryPath = path.join(__dirname, "./public");

const viewPath = path.join(__dirname, "./templates/views");
// tell express which templating engine im gonna use
app.set("view engine", "hbs");
// Pointing express to my custom directory
app.set("views", viewPath);

// *Setup Static directory to server
app.use(express.static(path.join(publicDirectoryPath)));

/*****PAGES*****/
// app.get("/index", (req, res) => {
//   res.render("index");
// });


/**Dropdown LIST SELECT OPTION**/
var datar = fs.readFileSync(path_jsonfile)
var arrayOfObjects = JSON.parse(datar)
app.get('/index', (req, res) => {
  res.render('index', { datas: arrayOfObjects })
});


// Page not found
app.get("*", (res, req) => {
  req.render("404");
});


// Port
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

/*Ajoute Reservation*/
app.post("/reservation", urlencodedParser, function (req, res) {
  var data = LoadData.LoadJson("DATA/reservation.json");
  var Reser = {
    id: data[data.length - 1].id + 1,
    fname: req.body.fname,
    CheckIn: req.body.CheckIn,
    Checkout: req.body.Checkout,
    Birthday: req.body.Birthday,
    NoMembers: req.body.NoMembers,
  };
  data.push(Reser);
  LoadData.SaveJson("DATA/reservation.json", JSON.stringify(data));
  res.render("index.hbs");
});

// /*SIGNUP*/
// app.post("/User", urlencodedParser, function (req, res) {
//   var data = LoadData.LoadJson("DATA/User.json");
//   var NewUser = {
//     id: data[data.length - 1].id + 1,
//     userName: req.body.userName,
//     Password: req.body.Password,
//     CPasswrd: req.body.CPasswrd
//   };
//   data.push(NewUser);
//   LoadData.SaveJson("DATA/User.json", JSON.stringify(data));
//   res.render("index.hbs");
// });
/*delete produit*/
app.post("/DeleteReservation", urlencodedParser, function (req, res) {
  var data = LoadData.LoadJson("DATA/reservation.json");
  var datafilter = data.filter(function (hero) {
    return hero.id != req.body.id;
  });
  LoadData.SaveJson("DATA/reservation.json", JSON.stringify(datafilter));
  Reserv = LoadData.LoadJson("DATA/reservation.json");
  res.render('inbox.hbs', { Reserv });
});


/*Modifier Reservation */
app.post("/AlterReservation", urlencodedParser, function (req, res) {
  var data = LoadData.LoadJson("DATA/reservation.json");
  for (var i = 0; i < data.length; i++) {
    if (req.body.id == data[i].id) {
      data[i].fname = req.body.fname;
      data[i].CheckIn = req.body.CheckIn;
      data[i].Checkout = req.body.Checkout;
      data[i].Birthday = req.body.Birthday;
      data[i].NoMembers = req.body.NoMembers;
      break;
    }
  }

  LoadData.SaveJson("DATA/reservation.json", JSON.stringify(data));
  Reserv = LoadData.LoadJson("DATA/reservation.json");
  res.render('inbox.hbs', { Reserv });
});