/**
 * Created by songzhongkun on 2018/5/24.
 */
import {network} from 'utils';
import uuid from 'uuid/v4';
import sha1 from 'sha1';

const GET_ACCESS_TOKEN_URL = 'https://api.weixin.qq.com/cgi-bin/token';
const GET_TICKET_URL = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket';

module.exports = (req, res, next) => {

  const {url} = req.query;

  const timestamp = Date.parse(new Date()) / 1000;
  const noncestr = uuid();

  const data = {
    nonceStr: noncestr,
    timestamp,
    appId: 'wxda5c90f99a790e95',
  };

  const token_query = {
    grant_type: 'client_credential',
    appid: 'wxda5c90f99a790e95',
    secret: 'd5d45e96ae56407b450205db08d7c5d5',
  };

  const ticker_query = {type: 'jsapi'};

  network
    .get(GET_ACCESS_TOKEN_URL, token_query)
    .then(tokenObj => network.get(GET_TICKET_URL, {...ticker_query, access_token: tokenObj.access_token}))
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



