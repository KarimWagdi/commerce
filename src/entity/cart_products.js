const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "cart_products",
  tableName: "cart_products",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    quantity: {
        type: "int",
    },
    product_price: {
        type: "decimal",
    }
  },
  relations: {
    cart:{
        type: "many-to-one",
        target: "cart",
        joinColumn: { name: "cart_id", referencedColumnName: "id" },
    },
    product:{
        type: "many-to-one",
        target: "product",
        joinColumn: { name: "product_id", referencedColumnName: "id" },
    },
  }
});
