var express = require('express');
var router = express.Router();

/* コントローラー定義の読込 */
var navbar = require('./controllers/navbar.api.js');

/* URL マッピング */
// Movies 用Webサービス
// Navbar API 用 Webサービス
router.get('/api/navbar', navbar.index);

module.exports = router;
