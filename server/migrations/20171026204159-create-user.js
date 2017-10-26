module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
    		type: Sequelize.STRING,
    		allowNull: false,
    	},
    	password: {
    		type: Sequelize.STRING,
    		allowNull: false,
    	},
    	active: {
    		type: Sequelize.BOOLEAN,
    		defaultValue: false,
    	},
    	groupId:{
    		type: Sequelize.INTEGER,
    		onDelete: 'CASCADE',
    		references: {
    			model: 'Users',
    			key: 'id',
    			as: 'groupId',
    		}
    	},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};