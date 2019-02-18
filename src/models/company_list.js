/* /* /* jshint indent: 2 */
import sequelizeConnection from '../config/connection';
import Sequelize from 'sequelize';

export default sequelizeConnection.define('companyList', {
    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'company_id'
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'company_name'
    }
  }, {
    tableName: 'company_list'
  })
  .schema("investment_management"); 



/*  
const connection = require('../config/connection');
const Sequelize  =  require('sequelize');


module.exports = function(connection, Sequelize ) {
  return connection.define('companyList', {
    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'company_id'
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'company_name'
    }
  }, {
    tableName: 'profile'
  });
};
 */