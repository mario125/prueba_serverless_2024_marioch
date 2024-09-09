import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../connection/dbconnection';


export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    correo_electronico: {
        type: DataTypes.STRING(255),
        unique: true, 
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    fecha_creacion: {
        type: DataTypes.STRING,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    tableName: 'user',
    timestamps: false,
});
