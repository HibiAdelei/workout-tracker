const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();



router.put("/api/workouts/:id", async ({ params, body }, res) => {
    try {
        const wid = req.params.id;
        const wdata = await Workout.findByIdAndUpdate(wid, {
          $push: {
            exercises: req.body,
          },
        });
    
        res.json(wdata);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.get("/api/workouts/range", async (req, res) => {
    try {
        const rdata = await Workout.find();
        res.json(rdata);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.get("/api/workouts", async (req, res) => {
    try {
      const wsdata = await Workout.find();
      res.json(wsdata);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.get("/api/workouts", async (req, res) => {
    try {
        const wdata = await Workout.create(req.body);
        res.json(wdata);
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;