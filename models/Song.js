const {Sequelize, sequelize} = require('../db');
const { DataTypes } = require('sequelize')
// TODO - define the Song model
let Song = sequelize.define("song",{
    title: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length: DataTypes.NUMBER
});

module.exports = {
    Song
};