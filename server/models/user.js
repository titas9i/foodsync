module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
    		type: DataTypes.STRING,
    		allowNull: false,
    	},
  	email: {
  		type: DataTypes.STRING,
  		allowNull: false,
  	},
  	password: {
  		type: DataTypes.STRING,
  		allowNull: false,
  	},
  	active: {
  		type: DataTypes.BOOLEAN,
  		defaultValue: false,
  	}
  });
  
  User.associate = (models) =>{
	User.belongsTo(models.UserGroup, {
		foreignKey: 'groupId',
		onDelete: 'CASCADE'
	});  
  };
  
  return User;
};