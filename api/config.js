module.exports = {
    api:{
        port: process.env.API_PORT || 3000,    
    },
    jwt:{
        secret : process.env.JWT_SECRET || 'notasecret!',
    },

    mysql:{
        host:process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'Ecc9rzr9Zq',
        password: process.env.MYSQL_PASS || 'oyqO82wGXO',
        database: process.env.MYSQL_DB || 'Ecc9rzr9Zq',

    }
}