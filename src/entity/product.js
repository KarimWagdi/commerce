const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "product",
  tableName: "product",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    name:{
      type: "varchar",
      default: "null"  
    },
    description: {
      type: "varchar",
    },
    price: {
      type: "int",
    },
    quantity: {
        type: "int",
    },
    image:{
      type: "varchar",
    }
  },
  relations: {
    category: {
      type: "many-to-one",
      target: "category",
      joinColumn: { name: "category_id", referencedColumnName: "id" },
    },
    user: {
      type: "many-to-one",
      target: "user",
      joinColumn: { name: "user_id", referencedColumnName: "id" },
    }
  }
});
