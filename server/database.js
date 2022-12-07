// var mysql = require("mysql")
// var connection = mysql.createConnection({
//     host:"localhost",
//     database:"cointab",
//     user:"root",
//     password:"root"

// })



   //       else if (
      //         results[0].bad_password_count >= 5 &&
      //         results[0].is_locked == 0
      //       ) {
      //         let cuurent = new Date();
      //         let id = results[0].id;
      //         let ex = new Date(Date.now() + 24 * (60 * 60 * 1000));
      //         let sql = `UPDATE user
      // SET is_locked = ?,
      // lock_timeout
      // WHERE id = ?`;

      //         let data = [1, ex, id];

      //         connection.query(sql, data, (error, results, fields) => {
      //           if (error) {
      //             return console.error(error.message);
      //           }
      //           response.send("your account has been  block foe next 24 hours");
      //         });
      //       } 
            // else if (
            //   results[0].bad_password_count >= 5 &&
            //   results[0].is_locked == 1
            // ) {
            //   let cuurent = new Date();
            //   if (
            //     cuurent > results[0].lock_timeout &&
            //     results[0].password == password
            //   ) {
            //     let id = results[0].id;
            //     let sql = `UPDATE user
            //     SET is_locked = ?,
            //     bad_password_count
            //     lock_timeout
            //     WHERE id = ?`;

            //     let data = [0, 0, null, id];

            //     connection.query(sql, data, (error, results, fields) => {
            //       if (error) {
            //         return console.error(error.message);
            //       }
            //       response.send(results);
            //     });
            //   } else {
            //     if (
            //       cuurent > results[0].lock_timeout &&
            //       results[0].password != password
            //     ) {
              

            //         response.send("Incorrect  Password");
               
            //     }
            //   }
            // } 