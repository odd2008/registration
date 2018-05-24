/**
 * Created by songzhongkun on 2018/5/24.
 */
import {network} from 'utils';
import uuid from 'uuid/v4';
import sha1 from 'sha1';
import qs from 'qs';

const GET_ACCESS_TOKEN_URL = 'https://api.weixin.qq.com/cgi-bin/token';
const GET_TICKET_URL = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket';

module.exports = (req, res, next) => {

  const {url} = req.body;

  const timestamp = Date.parse(new Date());
  const noncestr = uuid();

  const data = {
    nonceStr: noncestr,
    timestamp,
    appId: 'wxda5c90f99a790e95',
  };

  const query = {
    grant_type: 'client_credential',
    appid: 'wxda5c90f99a790e95',
    secret: 'd5d45e96ae56407b450205db08d7c5d5',
  };

  network
    .get(GET_ACCESS_TOKEN_URL, query)
    .then(tokenObj => network.get(GET_TICKET_URL, {type: 'jsapi', access_token: tokenObj.access_token}))
    .then(ticketObj => {

      const config = {
        jsapi_ticket: ticketObj,
        noncestr,
        timestamp,
        url,
      };

      data.signature = sha1(qs.stringify(config));
      res.json(data);
    })
    .catch(err => next(err));

};



