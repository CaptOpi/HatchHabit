const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },
  completed: { 
    type: Boolean,
    default: false }
});
const animalsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  id: {
    type: Number,
    require: true
  }
});
const GoalSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 40
    },
    completed: {
      type: Boolean,
      default: true
    }
});
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 40
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: props =>`${props.value} is not a valid email.`  
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20
    },
    tasks: {
        type: [TaskSchema],
        default: []
    },
    goal: {
      title: {
        type: String,
        minlength: 1,
        maxlength: 40,
        default: "No Goal"
      },
      completed: {
        type: Boolean,
        default: false
      }
    },
    completedGoals: [GoalSchema],
    animals: [animalsSchema],
    completedAnimals: [animalsSchema]
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel