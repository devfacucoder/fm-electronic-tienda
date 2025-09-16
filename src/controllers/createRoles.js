import roleModel from "../models/role.model.js";

export const createRole = async () => {
  try {
    const allRoles = await roleModel.findOne({ name: "admin" });

    if (!allRoles) {
      const adminUser = await roleModel.create({ name: "admin" });
    }
    console.log("admin ya creado");
  } catch (error) {
    console.log("error en crear roles: " + error);
  }
};
