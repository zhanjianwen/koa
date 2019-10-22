const router = require('koa-router')()
// var bodyParser = require('koa-bodyparser')
const controllers = require('../controller/index.js')
// var bodyParser=require('body-parser');
router.get('/test', async (ctx, next) => {
  await controllers.userController(ctx)
})
module.exports = router