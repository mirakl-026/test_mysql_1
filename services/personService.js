const Person = require("../models/person");
const DbService = require("../util/mysqlService");

const db = DbService.getContext();

// CREATE
module.exports.createPerson = async function(candidate) {
    try {
        const {firstName, lastName} = candidate;
        
        const result = await db.query('INSERT INTO person VALUES (DEFAULT,?,?);',[firstName, lastName]);
        console.log(result);
        
    } catch (e) {
        throw e;
    }
}

// READ
module.exports.readPersonById = async function(id) {
    try {
        const [rows] = await db.query("SELECT * FROM person WHERE PersonId = ?;", id)
        console.log(rows);

    } catch (e) {
        throw e;
    }
}

// READ ALL
module.exports.readAllPersons = async function() {
    try {
        // query database using promises
        const [rows] = await db.query("SELECT * FROM person;");
        console.log(rows);

    } catch (e) {
        throw e;
    }
}

// UPDATE
module.exports.updatePerson = async function(candidate) {
    try {
        const result = await db.query("UPDATE person SET FirstName = ?, LastName = ? WHERE PersonId = ?", [candidate.firstName, candidate.lastName, candidate.id]);
        console.log(result);

    } catch (e) {
        throw e;
    }
}

// DELETE
module.exports.deletePersonById = async function(id) {
    try {
        const result = await db.query("DELETE FROM person WHERE PersonId = ?", [id]);
        console.log(result);

    } catch (e) {
        throw e;
    }
}