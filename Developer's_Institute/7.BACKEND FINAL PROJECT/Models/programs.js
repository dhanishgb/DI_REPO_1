const { DataTypes } = require('sequelize');
const db = new Sequelize('postgresql://class143_owner:BThOV0lZb3YU@ep-holy-lab-a2xm39f8.eu-central-1.aws.neon.tech/FitnessPlanet?sslmode=require');
// database connection object

const Progra = db.define('Program', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING
    
});

db.sync()
.then(() => {
    console.log('Product table created if not already exists.');
})
.catch((error) => {
    console.error('Error creating table:', error);
});


module.exports = Program;

