const { DataTypes, Defferable } = require("sequelize");

sequelize.define(
  "Foo",
  {
    // Поле `flag` логічного типу за замовчуванням буде мати значення `true`
    flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

    // Значенням за замовчуванням для поля `myDate` буде поточна дата та час
    myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

    // Налаштування `allowNull` зі значенням `false` забороняє запис у колонку нульових значень (NULL)
    title: { type: DataTypes.STRING, allowNull: false },

    // Створення двох об'єктів з однаковим набором значень, зазвичай, призводить до виникнення помилки.
    // Значенням налаштування `unique` може бути рядок або булеве значення. У даному випадку формується складовий унікальний ключ
    uniqueOne: { type: DataTypes.STRING, unique: "compositeIndex" },
    uniqueTwo: { type: DataTypes.INTEGER, unique: "compositeIndex" },

    // `unique` використовується для позначення полів, які повинні містити лише унікальні значення
    someUnique: { type: DataTypes.STRING, unique: true },

    // Первинні або основні ключі будуть детально розглянуті далі
    identifier: { type: DataTypes.STRING, primaryKey: true },

    // Налаштування `autoIncrement` може використовуватися для створення колонки з автоматично зростаючими цілими числами
    incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

    // Налаштування `field` дозволяє кастомізувати назву колонки
    fieldWithUnderscores: {
      type: DataTypes.STRING,
      field: "field_with_underscores",
    },

    // Зовнішні ключі також будуть детально розглянуті далі
    bar_id: {
      type: DataTypes.INTEGER,

      references: {
        // посилання на іншу модель
        model: Bar,

        // назва колонки моделі-посилання з первинним ключем
        key: "id",

        // у випадку з `postres`, можна визначати затримку отримання зовнішніх ключів
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
        /*
        `Deferrable.INITIALLY_IMMEDIATE` — перевірка зовнішніх ключів виконується негайно
        `Deferrable.INITIALLY_DEFERRED` — перевірка зовнішніх ключів відкладається до кінця транзакції
        `Deferrable.NOT` — без затримки: це не дозволить динамічно змінювати правила в транзакції
      */

        // Коментарі можна додавати лише в `mysql`/`mariadb`/`postres` і `mssql`
        commentMe: {
          type: DataTypes.STRING,
          comment: "Коментар",
        },
      },
    },
  },
  {
    // Аналог атрибута `someUnique`
    indexes: [
      {
        unique: true,
        fields: ["someUnique"],
      },
    ],
  }
);

// Створюємо об'єкт
let jane = User.build({ name: "Jane" });
// та зберігаємо його до БД
await jane.save();

// Скорочений варіант
jane = await User.create({ name: "Jane" });
console.log(jane.toJSON());
console.log(JSON.stringify(jane, null, 2));

john = await User.create({ name: "John" });
// Вносимо зміни
john.name = "Bob";
// та оновлюємо відповідний запис до БД
await john.save();

john = await User.create({ name: "John" });
john.name = "Bob";

// Перезавантаження екземпляра призводить до скидання всіх полів до дефолтних значень
await john.reload();
console.log(john.name); // John

john = await User.create({ name: "John" });
john.name = "Bob";
john.favouriteColor = "blue";
// Зберігаємо лише зміну імені
await john.save({ fields: ["name"] });

await john.reload();
console.log(john.name); // Bob
//Зміну кольору не було зафіксовано
console.log(john.favouriteColor); // green

john = await User.create({ name: "John", age: 98 });

const incrementResult = await john.increment("age", { by: 2 });
// При збільшенні значення на 1, налаштування `by` можна опустити — increment('age')

// Оновлений користувач буде повернутий тільки в `postres`, в інших БД він матиме значення `undefined`.

john = await User.create({ name: "John", age: 98, cash: 1000 });

await john.increment({
  age: 2,
  cash: 500,
});
