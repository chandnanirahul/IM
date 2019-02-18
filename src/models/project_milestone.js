/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('projectMilestone', {
    milestoneId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'milestone_id'
    },
    dealId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'deal',
        key: 'deal_id'
      },
      field: 'deal_id'
    },
    projectMilestoneData: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'project_milestone_data'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_date'
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'created_by'
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'modified_date'
    },
    modifiedBy: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'modified_by'
    }
  }, {
    tableName: 'project_milestone'
  });
    
};
