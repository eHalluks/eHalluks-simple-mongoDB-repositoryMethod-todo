const {db, client} = require('./utils/db');
const {TodoRepository} = require("./repositories/todo.repository");
const {TodoRecord} = require("./records/todo.record");
const {ObjectId} = require("mongodb");

(async () => {


    try {

        /* // //dodawanie nowego rekordu

            const todo = new TodoRecord({
                shortDescription: 'INC3272456',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            });

            await TodoRepository.insert(todo)
            console.log("")
            console.log('     dodano nowy rekord - 2');
            console.log("")
            console.log("     Lista rekordów - 3");
            console.log("")
            console.log(await TodoRepository.findAll());

        */

        // ###########################################################
        // ###########################################################
        // ###########################################################

        /* //znajdowanie konkretnego rekordu

            console.log(await TodoRepository.find('6444f416b48fca25c1218eff'));

        */

        // ###########################################################
        // ###########################################################
        // ###########################################################

        /* // //aktualizacja rekordów

            const todo = await TodoRepository.find('64441b8b926525142fe4bb44');

            todo._id = new ObjectId('64441b8b926525142fe4bb44');
            todo.shortDescription = 'INC1234567';
            todo.longDescription = 'To jest testowa zmiana';

            await TodoRepository.update(new TodoRecord(todo));
            console.log(await TodoRepository.find('64441b8b926525142fe4bb44'));

        */

        // ###########################################################
        // ###########################################################
        // ###########################################################

        /* // usuwanie rekordu

            const todo = await TodoRepository.find('6444f41a3f1eb8c6293a061e');

            if (todo === null) {
                throw new Error (`the find operation failed. The object ${todo._id} was not found`);
            }

            try {

                await TodoRepository.delete(new TodoRecord(todo));
                await console.log('Delete process has been completed successfully')
                await console.log(await TodoRepository.findAll())

            } catch (err) {

                throw new Error(`the delete operation failed. The object ${todo._id} was not deleted`);

            }

         */

        // ###########################################################
        // ###########################################################
        // ###########################################################


    }finally {await client.close();}

})();