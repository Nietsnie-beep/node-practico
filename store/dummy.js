const db = {
    'user':[
        {id:1, name:'Nietsnie'},
    ],
}

const list = async(table) => {
    return db[table];
}

const get = (table, id) => {
    let col = list(table);
    return col.filter(item => item.id === id)[0] || null;
}

const upsert = (table, data) => {
    db[collection].push(data)
}

const remove = (table, id) => {
    return true
}

module.exports = {
    list,
    db,
    get,
    upsert,
    remove
}