/**
 * Created by songzhongkun on 2018/5/25.
 */

module.exports = (req, res, next) => {

  const token = req.query.Token;


  if (token == 'f126897c-cbb2-43be-a704-a60c0fbfe6fa') {
    res.json({msg: 'ok'});
  }else{
    res.json({msg: 'fail'});
  }

};