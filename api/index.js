const apiQuestion = require('./question');
const apiAnswer = require('./answer');

module.exports = (express) => {
  const router = express.Router();

  // GET: all questions with filters (filter=['not_answered', 'answered'])
  // curl -G -i -H "Accept: application/json" http://localhost:9000/api/question
  // curl -G -i -H "Accept: application/json" http://localhost:9000/api/question?filter=not_answered
  // curl -G -i -H "Accept: application/json" http://localhost:9000/api/question?filter=answered
  router.get('/question', apiQuestion.getQuestions);

  // GET: answers by question id (id)
  // curl -G -i -H "Accept: application/json" http://localhost:9000/api/question/:id
  router.get('/question/:id', apiAnswer.getAnswersById);

  // POST: add question (title, username)
  // curl -H "Content-Type: application/json" -X POST -d '{"username": "username","title": "title"}' http://localhost:9000/api/question
  router.post('/question', apiQuestion.addQuestion);

  // POST: add answer (text, username, QuestionId)
  // curl -H "Content-Type: application/json" -X POST -d '{"username": "username","text": "text", "questionId": "a490e2b0-0756-11e7-81f5-e97b146b5bb8"}' http://localhost:9000/api/answer
  router.post('/answer', apiAnswer.addAnswer);

  return router;
};
