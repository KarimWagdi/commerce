// const { EntitySchema } = require("typeorm");

// module.exports = new EntitySchema({
//   name: "order_details",
//   tableName: "order_details", // Optional: specify table name
//   columns: {
//     id: {
//       type: "int",
//       primary: true,
//       generated: true,
//     },
//     order_id: {
//       type: "int",
//     },
//     order_items: {
//         type: "json", 
//         nullable: false,
//     },
//     total_price: {
//         type: "float",
//         nullable: false,
//     }
//   },
//   relations: {
//     order: {
//       type: "one-to-one",
//       target: "order",
//       inverseSide: "orderDetails",
//     },
//     products: {
//       type: "many-to-many",
//       target: "product",
//       joinTable: {
//         name: "order_details_products",
//         joinColumns: [{ name: "order_details_id" }],
//         inverseJoinColumns: [{ name: "product_id" }],
//       },
//     },
//   }
// });
