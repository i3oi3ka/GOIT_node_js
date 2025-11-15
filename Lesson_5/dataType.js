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
