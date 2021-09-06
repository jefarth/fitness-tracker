const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutTrackerDB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`)); 