module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    groupName: {
    		type: DataTypes.STRING,
    		allowNull: false,
    	},
    	active: {
    		type: DataTypes.BOOLEAN,
    		defaultValue: true,
    	}
  });
  
  UserGroup.associate = (models) =>{
	  UserGroup.hasMany(models.User, {
		  foreignKey: 'groupId',
		  as: 'users',
	  });
  };
    
  return UserGroup;
};