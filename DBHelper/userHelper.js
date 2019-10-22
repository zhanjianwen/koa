const mongoDBs = require('../mongoDB/index.js')
const DB = mongoDBs.DB
const Schema = mongoDBs.Schema
const User = DB.model('user', new Schema({
  user: String,
  age: Number,
  sex: String,
}))


// //删
// //删除MongoDB中的数据（删除当前的文档模型的数据中的age为18的数据）
// User.remove({age:18},(err,doc)=>{
//   console.log(doc)
// })
// //改 
// //修改更新（将当前的模型中的某个字段提取出来，并且修改当前字段的对应的属性的值）
// User.update({'User':'haoge'},{'$set':{age:26}},(err,doc)=>{
//   console.log(doc)
// })

// //查
// //查询当前的User模型中的所有数据： 
// User.find({},(err,doc)=>{
//   console.log(doc)
// })


// //条件查询（仅当前）
// User.findOne({User,pwd:md5(pwd)},(err,doc)=>{

// })

// //更具参数查找MongoDB的数据更具useid body查找数据
// User.findByIdAndUpdate(useid,body,(err,doc)=>{
// })


//创建用户
const userCreateHelper = function (datas) {
  User.create(datas, (err, doc) => {
    if (err) {
      return '创建失败' //如果没报错打印当前的MongoDB的数据
    } else {
      return doc //如果出错打印出错误的信息
    }
  })
}
//查询用户
const userFindHelper = async function (datas) {
  return await User.find(datas, (err, doc) => {
    if (err) {
      return '查询失败'
    }
    return doc
  })
}
module.exports = {
  userCreateHelper,
  userFindHelper
}