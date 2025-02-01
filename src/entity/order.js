const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "order",
  tableName: "order", // Optional: specify table name
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    user_id: {
      type: "int",
    },
    delivery_id:{
      type: "varchar",
      default: "null"  
    },
    total_price: {
      type: "int",
    },
    state:{
      type: "enum",
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    }
  },
});
