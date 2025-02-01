// const { EntitySchema } = require("typeorm");

// module.exports = new EntitySchema({
//   name: "order",
//   tableName: "order", // Optional: specify table name
//   columns: {
//     id: {
//       type: "int",
//       primary: true,
//       generated: true,
//     },
//     order_derails_id: {
//       type: "int",
//     },
//     product_id:{
//       type: "varchar",
//       default: "null"  
//     },
//   },
//   relations: {
//     order: {
//      type: "one-to-many",
//       target: "order_details",
//       joinColumn: { name: "order_id", referencedColumnName: "id" },
//     },
//     product: {
//       type: "many-to-one",
//       target: "Product",
//       inverseSide: "orders",
//     },
//   }
// });
