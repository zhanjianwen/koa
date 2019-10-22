const mongoose = require('mongoose')
const config = require('../config/index')
const DB = mongoose
const Schema = DB.Schema
const connect = () => {
    // 连接数据库
    DB.connect(config.DBpath, { useNewUrlParser: true })
    // 连接错误
    DB.connection.on('error', error => {
        // tslint:disable-next-line
        console.error('数据库连接失败!', error)
    })
    // 连接成功
    DB.connection.once('open', () => {
        // tslint:disable-next-line
        console.log('数据库连接成功!')
    })

    return DB
}
module.exports={
    DB,
    Schema,
    connect
}
