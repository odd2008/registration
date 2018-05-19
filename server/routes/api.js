import express from 'express';
import responseTime from 'response-time';
const router = express.Router();
import controllers from '../controllers';
import middleWares from '../middleware';

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log(`API:${req.url},API-TIME-START:${new Date()}`);
  next();
});

router.use(responseTime(function (req, res, time) {
  console.log(`APIMETHOD : ${req.method} : ${req.url} : ${time}`);
}));

router.get('/spider/:id', controllers.spider.index);
router.post('/verifycode', controllers.verifycode);

module.exports = router;