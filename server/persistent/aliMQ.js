import AliMNS from 'ali-mns';
import config from '../config';
let aliMqAccount = new AliMNS.Account(config.nms.accountId, config.nms.keyId, config.nms.keySecret);
let beijingRegion = new AliMNS.Region(AliMNS.City.Beijing, config.nms.region, 'cn');
let mq = new AliMNS.MQ(config.nms.mgName, aliMqAccount, beijingRegion);

module.exports.aliMQ = mq;