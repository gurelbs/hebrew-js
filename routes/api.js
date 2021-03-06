const express = require('express');
const getWeather = require('../controllers/getWeather');
const getTranslate = require('../controllers/getTranslate');
const getMeaning = require('../controllers/getMeaning');
const getDirection = require('../controllers/getDirection');
const getNews = require('../controllers/getNews');

const router = express.Router();


router.get(`/direction`, async (req, res) => {
    try {
      let {from, to} = req.query;
      if(!from && !to) res.json('לא נמצא מוצא ויעד')
      if(!from) res.json('לא נמצא מוצא ')
      if(!to) res.json('לא נמצא יעד')
      let answer = await getDirection(from, to);
      res.json(answer)
    } catch (error) {
      console.log(error);
    }
})
module.exports = router