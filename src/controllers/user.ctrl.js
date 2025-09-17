import userModel from "../models/user.model.js";
import roleModel from "../models/role.model.js";

import jwt from "jsonwebtoken";

export const createUser = async (username, password, email) => {
  try {
    const newUser = new userModel({
      userName: username,
      passWord: password,
      email,
      role: await roleModel.findOne({ name: "admin" }),
    });
    const userSave = await newUser.save();
    return userSave;
  } catch (error) {
    console.log(error);
  }
};
// ✅ Login arreglado
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario (con contraseña incluida)
    const userFound = await userModel.findOne({ email }).select("+passWord");
    if (!userFound) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    // Comparar contraseñas
    const isMatch = await userFound.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Generar token
    const token = jwt.sign(
      { id: userFound._id }, // payload
      process.env.JWT_SECRET, // clave secreta
      { expiresIn: "1h" } // opciones
    );

    // Devolver token y datos básicos del usuario
    res.json({
      message: "Login exitoso",
      token,
      user: {
        id: userFound._id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error en el login" });
  }
};
