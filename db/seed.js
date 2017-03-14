module.exports = function(db) {
  db.Question.create({
    title: 'What features would you like to see',
    username: 'Guy1',
  }).then(function(q) {
    db.Answer.bulkCreate([{
      username: 'User1',
      text: 'New, fancy interface',
      QuestionId: q.id,
    }, {
      username: 'Admin1',
      text: 'Faster response times',
      QuestionId: q.id,
    }]);
  });
};
