const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ObjetiveVision = sequelize.define('ObjetiveVision', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tittleLanding: { type: DataTypes.STRING, allowNull: false },
    tittleWelcom: { type: DataTypes.STRING, allowNull: false },
    text1Welcom: { type: DataTypes.STRING, allowNull: false },
    text2Welcom: { type: DataTypes.STRING, allowNull: false },
    imageLogoWelcom: {type: DataTypes.STRING, allowNull: false},
    tittleOffer: {type: DataTypes.STRING, allowNull: false},
    tittleOfferCard1: {type: DataTypes.STRING, allowNull: false},
    textOfferCard1: {type: DataTypes.STRING, allowNull: false},
    tittleOfferCard2: {type: DataTypes.STRING, allowNull: false},
    textOfferCard2: {type: DataTypes.STRING, allowNull: false},
    tittleOfferCard3: {type: DataTypes.STRING, allowNull: false},
    textOfferCard3: {type: DataTypes.STRING, allowNull: false},
    tittleAbout: {type: DataTypes.STRING, allowNull: false},
    imageAbout: {type: DataTypes.STRING, allowNull: false},
    text1About: {type: DataTypes.STRING, allowNull: false},
    text2About: {type: DataTypes.STRING, allowNull: false},
    text3About: {type: DataTypes.STRING, allowNull: false},
    tittleAboutcard1: {type: DataTypes.STRING, allowNull: false},
    text1Aboutcard1: {type: DataTypes.STRING, allowNull: false},
    text2Aboutcard1: {type: DataTypes.STRING, allowNull: false},
    tittleAboutcard2: {type: DataTypes.STRING, allowNull: false},
    text1Aboutcard2: {type: DataTypes.STRING, allowNull: false},
    text2Aboutcard2: {type: DataTypes.STRING, allowNull: false},
    tittleAboutcard3: {type: DataTypes.STRING, allowNull: false},
    text1Aboutcard3: {type: DataTypes.STRING, allowNull: false},
    text2Aboutcard3: {type: DataTypes.STRING, allowNull: false},
    tittleMVO: {type: DataTypes.STRING, allowNull: false},
    imageMVOCard1: {type: DataTypes.STRING, allowNull: false},
    tittleMVOCard1: {type: DataTypes.STRING, allowNull: false},
    textMVOCard1: {type: DataTypes.STRING, allowNull: false},
    imageMVOCard2: {type: DataTypes.STRING, allowNull: false},
    tittleMVOCard2: {type: DataTypes.STRING, allowNull: false},
    textMVOCard2: {type: DataTypes.STRING, allowNull: false},
    imageMVOCard3: {type: DataTypes.STRING, allowNull: false},
    tittleMVOCard3: {type: DataTypes.STRING, allowNull: false},
    textMVOCard3: {type: DataTypes.STRING, allowNull: false}

    
});

module.exports = ObjetiveVision;
