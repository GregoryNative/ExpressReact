const app = require('./app');
const db = require('../models');

const PORT = process.env.PORT || 9000;

// db.sequelize
//   .sync({ force: true })
//   .complete(function(err) {
//     if (err) {
//       throw err[0];
//     } else {
//       // seed
//       require('../db/seed')(db);
//
//       app.listen(PORT, () => {
//         console.log(`App listening on port ${PORT}!`);
//       });
//     }
//   });

// uncomment this to dont drop tables after restart server

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
