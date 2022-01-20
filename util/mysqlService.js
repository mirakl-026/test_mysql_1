const mysql = require("mysql2");

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'testdb',
    password: '_Iddqd1Idkfa2!'
});

const promisePool = pool.promise();


module.exports.getContext = function() {
    return promisePool;
} 

module.exports.endWork = function() {
    promisePool.end();
}



