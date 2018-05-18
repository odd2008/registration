'use strict';

import config from 'config';
import {network} from 'utils';

export const getBusinessUserType = () => {
  network
    .get(`${config.api_host}/business/getUserType`)
    .then(payload => payload)
    .catch(e => {
      Promise.reject(e);
    });
};

export const getBusinessDownloadCount = () => {
  network
    .get(`${config.api_host}/business/getDownCountLeft`)
    .then(payload => payload)
    .catch(e => {
      Promise.reject(e);
    });
};

export const checkUserTypeAndDownloadAuth = () => {
  let needDialogArr = config.business.needDialogArr || [];
  return network.get(`${config.api_host}/business/getUserType`)
    .then(userType => {
      if (needDialogArr.indexOf(userType) < 0) return '0';//正常签约用户，不需要弹窗
      else return userType;
    }).then(userType => {
      if (userType == '0') return userType;
      return network.get(`${config.api_host}/business/getDownCountLeft`)
        .then(payload => {
          return getDownloadState(userType, payload.acceptAgreement, payload.left);
        }).catch(e => {
          Promise.reject(e);
        });
    }).catch(e => {
      Promise.reject(e);
    });
};

export const updateBusinessDownloadCount = params => {

  return network.post(`${config.api_host}/business/updateDownCount`, params)
    .then(payload => {
      return payload;
    });
};

function getDownloadState(userType, acceptAgreement, downloadLeft) {
  let notHasInfoArr = config.business.notHasInfoArr || [];//未完善信息
  if (acceptAgreement != 1) {
    return '1';//需要弹法律条款的框
  }
  else if (downloadLeft <= 0 && notHasInfoArr.indexOf(userType) >= 0) {
    return '2';//剩余下载数量未0且未完善信息
  }
  else if (downloadLeft <= 0 && notHasInfoArr.indexOf(userType) < 0) {
    return '3';//剩余下载数量未0且未完善信息 D类用户
  }
  return '0';
}

