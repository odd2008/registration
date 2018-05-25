/**
 * Created by songzhongkun on 2018/5/24.
 */
import {network} from 'utils';
import uuid from 'uuid/v4';
import sha1 from 'sha1';

const basic = require('../../config/basic');

module.exports = (req, res, next) => {

  const {url} = req.query;

  const timestamp = Date.parse(new Date()) / 1000;
  const noncestr = uuid();

  const data = {
    nonceStr: noncestr,
    timestamp,
    appId: basic.appID,
  };

  const token_query = {
    grant_type: basic.grant_type,
    appid: basic.appID,
    secret: basic.appsecret,
  };

  const ticker_query = {type: basic.type};

  network
    .get(basic.getTokenUrl, token_query)
    .then(tokenObj => network.get(basic.getTicketUrl, {...ticker_query, access_token: tokenObj.access_token}))
    .then(ticketObj => {

      const config = {
        jsapi_ticket: ticketObj.ticket,
        noncestr,
        timestamp,
        url,
      };

      console.log(config);

      data.signature = sha1(`jsapi_ticket=${config.jsapi_ticket}&noncestr=${config.noncestr}&timestamp=${config.timestamp}&url=${config.url}`);
      res.json(data);
    })
    .catch(err => next(err));

};



