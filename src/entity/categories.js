const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "category",
  tableName: "category", // Optional: specify table name
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    name: {
      type: "varchar",
    },
    image: {
      type: "varchar",
    }
  },
});
