import Sequelize from 'sequelize';
const sequelize = new Sequelize(process.env.IM_DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_SERVER,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  operatorsAliases: false,  
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;