const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
});

const Basket = sequelize.define('backet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const BasketService = sequelize.define('basket_service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Service = sequelize.define('service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
});

const ServiceInfo = sequelize.define('service_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
});

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Service)
BasketService.belongsTo(Service)

Type.hasMany(Service)
Service.belongsTo(Type)

Service.hasMany(BasketService)
BasketService.belongsTo(Service)

Service.hasMany(ServiceInfo, {as: 'info'})
ServiceInfo.belongsTo(Service)

module.exports = {
    User, 
    Basket,
    BasketService,
    Type,
    Service,
    ServiceInfo
}