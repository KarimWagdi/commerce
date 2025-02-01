const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "cart",
  tableName: "cart",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    total_price: {
      type: "decimal",
    }
  },
  relations: {
    user: {
      type: "one-to-one",
      target: "user",
      joinColumn: { name: "user_id", referencedColumnName: "id" },
    },
    cartProduct: {
      type: "one-to-many",
      target: "cart_products",
      joinColumn: { name: "cart_products_id", referencedColumnName: "id" },
    },
  }
});
