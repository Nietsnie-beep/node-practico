const db = {
    'user':[
        {id:'1', name:'Nietsnie'},
    ],
}

const list = async(table) => {
    return db[table] || [];
}

const get = async(table, id) => {
    let col = await list(table);
    return col.filter(item => item.id === id)[0] || null;
}

const upsert = async(table, data) => {
    if (!db[table]) {
        db[table] = [];
    }
    db[table].push(data)
    console.log(db);
}

const remove = async(table, id) => {

    return true
}

async function query(tabla, q) {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];
    
    return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
};
