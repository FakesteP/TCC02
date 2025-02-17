import { Sequelize } from "sequelize";
import db from "../config/database.js";

const users = db.define('users', {
  name: Sequelize.STRING,
  email: {type:Sequelize.STRING, allowNull:true},
  gender: Sequelize.STRING}, {
    freezeTableName: true,
    // timestamps: false
    createdAt: 'tanggal_dibuat',
    updatedAt: 'tanggal_diubah',
  });
  
  export default users;

  (async ()=> {
    await db.sync();
  })();
