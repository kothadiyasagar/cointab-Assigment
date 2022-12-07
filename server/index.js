var express = require("express");
var mysql = require("mysql");
const app = express();
var mysql = require("mysql");
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var connection = mysql.createConnection({
  host: "localhost",
  database: "cointab",
  user: "root",
  password: "123",
  insecureAuth: true,
});
app.post("/login", function (request, response) {
  // Capture the input fields
  let email_id = request.body.email_id;

  let password = request.body.password;
  if (!email_id || !password) {
    response.send("Enter the vaild  EmailId and/or Password!");
  } else {
    if (email_id && password) {
      connection.query(
        "SELECT * FROM user WHERE email_id = ? ",
        [email_id],
        function (error, results, fields) {
          if (error) throw error;
          let now = new Date();
          if (results.length > 0) {
            let cuurent = new Date();
          let dd =new Date(Date.now() + 24 * (60 * 60 * 1000))
          
        
            if (
              cuurent?.getDate() < results[0].lock_timeout?.getDate() &&
              results[0].bad_password_count >= 5 &&
              results[0].is_locked == 1 &&  cuurent.toLocaleTimeString() < results[0]?.lock_timeout.toLocaleTimeString() 
            ) {
              response.send("your account has been  block foe next 24 hours");
            } 
            

             if (
              results[0].bad_password_count === 5 &&
              results[0].is_locked == 0
            ) {
              let cuurent = new Date();
              let id = results[0].id;
              let ex = new Date(Date.now() + 24 * (60 * 60 * 1000));
              let sql = `UPDATE user
      SET is_locked = ?,
      lock_timeout=?
      WHERE id = ?`;

              let data = [1, ex, id];

              connection.query(sql, data, (error, results, fields) => {
                if (error) {
                  return console.error(error.message);
                }
                response.send("your account has been  block foe next 24 hours");
              });
            } 
            else if (
              results[0].bad_password_count >= 5 &&
              results[0].is_locked == 1
            ) {
              let cuurent = new Date();
          
              if (
                cuurent.toLocaleTimeString() >= results[0].lock_timeout.toLocaleTimeString()  &&
                results[0].password == password &&  cuurent.getDate() >= results[0].lock_timeout.getDate() 
                
              ) {
                let id = results[0].id;
                let sql = `UPDATE user
                SET is_locked = ?,
                bad_password_count=?,
                lock_timeout=?
                WHERE id = ?`;

                let data = [0, 0, null, id];
              
                connection.query(sql, data, (error, results, fields) => {
                  if (error) {
                    return console.error(error.message);
                  }
               
                });
                response.send(results);
              } else {
                if (
                  cuurent.toLocaleTimeString() >= results[0].lock_timeout.toLocaleTimeString() &&
                  results[0].password != password
                ) {
              

                    response.send("Incorrect  Password");
               
                }
              }
            } else if (
              results[0].password == password &&
              results[0].bad_password_count < 5 &&
              results[0].is_locked === 0
            ) {
            
              let id = results[0].id;
              let sql = `UPDATE user
              SET is_locked = ?,
              bad_password_count=?,
              lock_timeout=?
              WHERE id = ?`;
              let data = [0, 0, null, id];
              connection.query(sql, data, (error, results, fields) => {
                if (error) {
                  return console.error(error.message);
                }
                // response.send(data);
            
              });
              response.send(results);
            } else if (
              results[0].password != password &&
              results[0].bad_password_count < 5 &&
              results[0].is_locked === 0
            ) {
           
              let id = results[0].id;
              let bad_password_count = results[0].bad_password_count + 1;
              console.log(results);
              // update statment
              let sql = `UPDATE user
                      SET bad_password_count = ?
                      WHERE id = ?`;

              let data = [bad_password_count, id];

              // execute the UPDATE statement
              connection.query(sql, data, (error, results, fields) => {
                if (error) {
                  return console.error(error.message);
                }
              
              });

              response.send("Incorrect  Password");
            }
          } else {
            response.send("Incorrect Username and/or Password!");
          }
          // response.send(results);
        }
      );
    } else {
      response.send("Please enter emailId and Password!");
      response.end();
    }
  }
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connection successful");
});

app.listen(8080, function () {
  console.log("App Listening On port 8080");
});
