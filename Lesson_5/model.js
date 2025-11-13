import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define(
  "User",
  {
    // Тут визначаються атрибути моделі
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull за замовчуванням має значення true
    },
  },
  {
    // Тут визначаються інші налаштування моделі
  }
);

// `sequelize.define` повертає модель
// console.log(User === sequelize.models.User); // true

// class Userextends Model {}

// User.init(
//   {
// // Тут визначаються атрибути моделі
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
// // Тут визначаються інші налаштування моделі
//     sequelize,// Екземпляр підключення (обов'язково)
//     modelName: 'User',// Назва моделі (обов'язково)
//   }
// )

// console.log(User === sequelize.models.User)// true
