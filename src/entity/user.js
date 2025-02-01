const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "user",
  tableName: "user", // Optional: specify table name
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    name: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
    gender:{
      type: "varchar",
      default: "null"  
    },
    dateOfBirth:{
      type: "timestamp",
      nullable: true
    },
    role:{
        type: "enum",
        enum: ["user", "admin"], 
        default: "user" 
    },
  },
  relations: {
    products: {
      type: "one-to-many",
      target: "user",
      inverseSide: "user" // Matches the relation name in Branch
    }
  }
});
