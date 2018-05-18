'use strict';

import config from 'config';

export const formatImageUrl = (src) => {
  let is_have_prefix = src.match(/\/\/goss(\d+)?\.vcg\.com/g);
  return is_have_prefix ? src : config.prefix.oss + src;
};

export const getFromObject = (obj, keyStr, defaultVal) => {
  let val = defaultVal;
  const keyArr = typeof keyStr == 'string' ? keyStr.split('.') : [];
  keyArr.forEach(key => {
    val = obj[key];
    val && (obj = obj[key]);
  });
  return val ? val : defaultVal;
};

export const GAListener = (category, action, label, value) => {
  const obj = {'data-ga-hittype': 'event'};
  if (category) obj['data-ga-event-category'] = category;
  if (action) obj['data-ga-event-action'] = action;
  if (label) obj['data-ga-event-label'] = label;
  if (value) obj['data-ga-event-value'] = value;
  return obj;
};

