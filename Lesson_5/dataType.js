// Імпорт вбудованих типів даних
const { DataTypes } = require("sequelize");

// Рядки
DataTypes.STRING; // VARCHAR(255)
DataTypes.STRING(1234); // VARCHAR(1234)
DataTypes.STRING.BINARY; // VARCHAR BINARY
DataTypes.TEXT; // TEXT
DataTypes.TEXT("tiny"); // TINYTEXT
DataTypes.CITEXT; // CITEXT - тiльки для `PostgreSQL` и `SQLite`

// Логічні значення
DataTypes.BOOLEAN; // BOOLEAN

// Числа
DataTypes.INTEGER; // INTEGER
DataTypes.BIGINT; // BIGINT
DataTypes.BIGINT(11); // BIGINT(11)

DataTypes.FLOAT; // FLOAT
DataTypes.FLOAT(11); // FLOAT(11)
DataTypes.FLOAT(11, 10); // FLOAT(11, 10)

DataTypes.REAL; // REAL — тільки для `PostgreSQL`
DataTypes.REAL(11); // REAL(11) — тільки для `PostgreSQL`
DataTypes.REAL(11, 12); // REAL(11,12) — тільки для `PostgreSQL`

DataTypes.DOUBLE; // DOUBLE
DataTypes.DOUBLE(11); // DOUBLE(11)
DataTypes.DOUBLE(11, 10); // DOUBLE(11, 10)

DataTypes.DECIMAL; // DECIMAL
DataTypes.DECIMAL(10, 2); // DECIMAL(10, 2)

// тільки для `MySQL`/`MariaDB`
DataTypes.INTEGER.UNSIGNED;
DataTypes.INTEGER.ZEROFILL;
DataTypes.INTEGER.UNSIGNED.ZEROFILL;

// Дати
DataTypes.DATE; // DATETIME для `mysql`/`sqlite`, TIMESTAMP з часовою зоною `postgres`
DataTypes.DATE(6); // DATETIME(6) для `mysql` 5.6.4+
DataTypes.DATEONLY; // DATE без часу

// UUID
DataTypes.UUID;

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
