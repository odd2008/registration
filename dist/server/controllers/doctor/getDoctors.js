"use strict";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

/**
 * Created by songzhongkun on 2018/5/22.
 */

module.exports = function (req, res, next) {
  _objectDestructuringEmpty(req.body);
};