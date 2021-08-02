const mysql = require('mysql');

const config = require('../api/config');

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let connection;

function handleCon(){
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if (err) {
            console.error('[db error]', err);
            setTimeout(handleCon, 2000)
        }else {
            console.log('DB connected');
        }
    });

    connection.on('error', err => {
        console.error('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon()
        }else {
            throw err;
        }
    })
}

handleCon();

function list(table){
    return new Promise((res, rej) =>
    connection.query(`SELECT * FROM ${table}`,(err, data) => {
        if (err ) {
            return rej(err);
        }
        res(data)
    })
    )}

async function get(table, id){
    return new Promise((res, rej) => {
        connection.query(`SELECT * FROM ${table} WHERE id ='${id}'`, (err, data) => {
            if (err ){
                return rej(err)
            }
            res(data)
        })
    })
}


function insert(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function update(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

const upsert = async (table, data) => {
    let row = []
    if(data.id){
        row = await get(table, data.id)
    }
    
    if (row.length === 0) {
      return insert(table, data);
    } else {
      return update(table, data);
    }
}


// function upsert(table,data) {
//     //update?
//     if (data && data.id) {
//         return update(table, data);
//     }else {
//         return insert(table, data)
//     }
// }

function query(table, query, join) {
    let joinQuery = '';

    if (join) {
        const key = Object.keys(join)[0]
        const val = join[key]
        joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
    }

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ?`, query, (err, res) => {
            if (err) return reject(err);
            resolve(res[0] || null);
        })
    })
}

async function getFollowers(query) {
    return new Promise((resolve, rej) => {
        connection.query(
            `select u.* from user_follow as f, user as u where u.id = f.user_to and ?`,query,(err,res) => {
                if (err) {
                    return rej(err)
                }
                resolve(res || null)
            }
        )
    })
}

module.exports = {
    list,
    get,
    upsert,
    query,
    getFollowers
}


