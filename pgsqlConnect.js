const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'Piyush@2002',
    port: 5432,
    database: 'test1'
});

client.connect((err, res) => {
    if(!err) {
        console.log("Successfully connected");
    }
    else {
        console.log("Error in connecting");
    }
});

client.query(`select * from testtable1`, (err, res) => {
    if(!err) {
        console.log(res.rows);
        console.log(typeof(res.rows));
    }
    else {
        console.log("Error in passing query");
    }
})

function insertValue() {
    client.query(`insert into testtable1 values (3, 'Swati')`, (err, res) => {
        if(!err) console.log(res.rows);
        else console.log("Inserting value failed");
        client.end();
    })
}

function updateValue() {
    client.query(`update testtable1 set name = 'Piyush' where id = 1`, (err, res) => {
        if(!err) {
            console.log("Updation Successful");
            client.query(`select * from testtable1 order by id`, (error, resp) => {
                if(!error) console.log(resp.rows);
                else console.log("Getting value failed");
            })
        }
        else console.log("Updation failed");
        // client.end();
    })
}

// insertValue();
updateValue();