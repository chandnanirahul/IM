/* jshint indent: 2 */
import sequelizeConnection from '../config/connection';
import Sequelize from 'sequelize';

console.log("entering im model");

export default sequelizeConnection.define('deal', {
  dealId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'deal_id'
  },
  ownerProfileId: {
    type: Sequelize.BIGINT,
    allowNull: true,
    field: 'owner_profile_id'
  },
  projectMilestoneId: {
    type: Sequelize.BIGINT,
    allowNull: true,
    references: {
      model: 'project_milestone',
      key: 'milestone_id'
    },
    field: 'project_milestone_id'
  },
  companyProfileId: {
    type: Sequelize.BIGINT,
    allowNull: true,
    field: 'company_profile_id'
  },
  industryId: {
    type: Sequelize.BIGINT,
    allowNull: true,
    references: {
      model: 'industry_information',
      key: 'industry_id'
    },
    field: 'industry_id'
  },
  dealChampionId: {
    type: Sequelize.BIGINT,
    allowNull: true,
    field: 'deal_champion_id'
  },
  dealData: {
    type: Sequelize.JSONB,
    allowNull: true,
    field: 'deal_data'
  },
  createdDate: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: sequelizeConnection.literal('CURRENT_TIMESTAMP'),
    field: 'created_date'
  },
  createdBy: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'created_by'
  },
  modifiedDate: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'modified_date'
  },
  modifiedBy: {
    type: Sequelize.STRING,
    allowNull: true,
    field: 'modified_by'
  }
}, {
    tableName: 'deal',
    timestamps: false
  })
  .schema("investment_management");
