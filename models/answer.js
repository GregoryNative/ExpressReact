module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define("Answer", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    text: DataTypes.STRING,
    username: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Answer.belongsTo(models.Question, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      },
      countAnswers: function(id, callback) {
        Answer.count({
          where: { 'QuestionId': id }
        }).then(function(count) {
          callback(null, count);
        });
      },
      addAnswer: function({ text, username, questionId }, callback) {
        Answer.create({
          text,
          username,
          QuestionId: questionId,
        })
        .then(answer => callback(null, answer))
        .catch(error => callback(error));
      },
    }
  });

  return Answer;
};
