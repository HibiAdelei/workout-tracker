const mongoose = require("mongoose");
const {Schema} = mongoose;
const virtualOptions = { toJSON: { virtuals: true } };

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: Date.now(),
      },
      exercises: [
        {
          name: {
            type: String,
            trim: true,
            required: "Please enter a name for this exercise:",
          },
          type: {
            type: String,
            trim: true,
            required: "Please enter the type of exercise being done:",
          },
          distance: {
            type: Number,
          },
          duration: {
            type: Number,
            required: "Please enter a duration for the workout, in minutes:",
          },
          weight: {
            type: Number,
          },
          reps: {
            type: Number,
          },
          sets: {
            type: Number,
          },
        },
      ],
    },
    virtualOptions
  );

workoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((acc, cur) => {
    return acc + cur.duration;
  }, 0);

  return duration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;