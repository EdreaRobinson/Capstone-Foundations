require("dotenv").config()

const Sequelize = require("sequelize")

const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists puppies;
            
            CREATE TABLE puppies (
                puppies_id SERIAL PRIMARY KEY,
                imageURL STRING,
                );
            
            INSERT INTO puppies (imageURL)
            VALUES ('./client/images/Puppies/Shiva-PoohBear1.jpg'), ('./client/images/Puppies/Shiva-PoohBear2.jpg'), ('./client/images/Puppies/Shiva-PoohBear3.jpg'), ('./client/images/Puppies/Shiva-PoohBear4.jpg');

        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    getPuppies: (req, res) => {
        sequelize.query(`
        SELECT * 
        FROM puppies;`)
            .then(dbRes => res.status(200).send(dbRes[0])).catch(err => console.log(err))
    }
}