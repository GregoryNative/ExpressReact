const db = require('../models');

const getAnswersById = (req, res) => {
  db.Answer.findAll({
    where: { QuestionId: req.params.id },
  })
  .then(questions => res.send({ data: questions }));
};

const addAnswer = (req, res) => {
  const text = req.body.text;
  const username = req.body.username;
  const questionId = req.body.questionId;

  db.Answer.addAnswer({ text, username, questionId }, (err, answer) => {
    if (err) {
      res.send(err);
    } else {
      res.send(answer);
    }
  });
};

module.exports = {
  getAnswersById,
  addAnswer,
};
