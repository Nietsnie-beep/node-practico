const store = require('../../../store/remote-mysql')
const ctrl = require('./controller')
const config = require("../../config");
/*
let store
if (config.remoteDB === true){
    store = require('../../../store/remote-mysql');
}else{
    store = require('../../../store/mysql')
}

*/


module.exports = ctrl(store)

