var db = require('./index');

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Question.hasMany(models.Answer)
      },

      addQuestion: function({ title, username }, callback) {
        Question.create({
          title,
          username,
        })
        .then(question => callback(null, question))
        .catch(error => callback(error));
      },
    },
  });

  return Question;
};
