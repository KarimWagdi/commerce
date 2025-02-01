const { EntitySchema } = require("typeorm");
module.exports = new EntitySchema({
  name: "rate",
  tableName: "rate", // Optional: specify table name
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    comment: {
      type: "varchar",
    },
    rate: {
        type: "int",
    }
  },
  relations: {
    users: {
      type: "many-to-one",
      target: "user",
      joinColumn: { name: "user_id", referencedColumnName: "id" },
    },
    products: {
      type: "many-to-one",
      target: "product",
      joinColumn: { name: "product_id", referencedColumnName: "id" },
    },
  }
});
