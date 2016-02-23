'use strict';
/**
 * Navbar Restful API
 */
var config = require('config');

module.exports = {
  /*
    index : Navbarデータ取得
  */
  index : function (req, res) {
    res.json(config.navbar);
  }
}
