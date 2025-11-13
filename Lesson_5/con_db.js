import { Sequelize } from 'sequelize';

// // Варіант 1: передача `URI` для підключення
// const sequelize = new Sequelize('sqlite::memory:') // для `sqlite`
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // для `postgres`

// // Варіант 2: передача параметрів окремо
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// })

// Варіант 2: передача параметрів окремо (для інших діалектів)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})

try {
await sequelize.authenticate()
  console.log('З'єднання з БД було успішно встановлено')
}catch (e) {
  console.log('Неможливо виконати підключення до БД: ', e)
}