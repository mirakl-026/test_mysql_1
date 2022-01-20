const PersonService = require("./services/personService");
const DbService = require("./util/mysqlService");

async function  main () {
    // await PersonService.readAllPersons();

    // await PersonService.createPerson({
    //     id: 4,
    //     firstName: 'Nik',
    //     lastName: 'Bowman'
    // });

    // await PersonService.readPersonById(2);
    // await PersonService.readPersonById(4);

    // await PersonService.createPerson({
    //     firstName: 'Wendy',
    //     lastName: 'Crosshair'
    // });

    // await PersonService.readAllPersons();

    // await PersonService.deletePersonById(4);

    await PersonService.updatePerson({
        id: 5,
        firstName: "Nik",
        lastName: "Nova"
    })

    await PersonService.readAllPersons();

    DbService.endWork();
}

main();

