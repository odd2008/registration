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
router.post('/addDoctor', controllers.doctor.addDoctor);
router.post('/getDoctors', controllers.doctor.getDoctors);
router.get('/wx/getConfig', controllers.weixin.index);
router.get('/wx/token', controllers.weixin.token);
router.get('/sm/number', controllers.sm.index);
router.post('/sm/confirm', controllers.sm.confirm);

router.get('/patient', controllers.patient.index);

module.exports = router;