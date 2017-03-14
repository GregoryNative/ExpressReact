const async = require('async');
const db = require('../models');

const getQuestions = (req, res) => {
  db.Question.findAll({ order: [['updatedAt', 'DESC']] })
  .then(questions => {
    const filter = req.query.filter;
    async.map(questions, (q, callback) => {
      db.Answer.countAnswers(q.id, (err, count) => {
        q.setDataValue('countAnswers', count);
        callback(err, q);
      });
    }, (err, results) => {
      const data = results
        .filter(item => {
          if (!filter) return item;
          if (filter === 'answered') {
            if (item.dataValues.countAnswers > 0) return item;
          }
          if (filter === 'not_answered') {
            if (item.dataValues.countAnswers === 0) return item;
          }
        });

      res.send({ data });
    });
  });
};

const addQuestion = (req, res) => {
  const title = req.body.title;
  const username = req.body.username;

  db.Question.addQuestion({ title, username }, (err, question) => {
    if (err) {
      res.send(err);
    } else {
      res.send(question);
    }
  });
};

module.exports = {
  getQuestions,
  addQuestion,
};
