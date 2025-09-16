import { Schema, Types, model } from "mongoose";
import roleModel from "./role.model.js";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio"],
      unique: true, // evita duplicados
      trim: true,   // elimina espacios al inicio/fin
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
      maxlength: [30, "El nombre no puede superar los 30 caracteres"],
    },
    passWord: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [6, "La contraseña debe tener mínimo 6 caracteres"],
      select: false, // por seguridad no se devuelve en queries
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Debe ser un email válido"],
    },
    role: {
      type: Types.ObjectId,
      ref: roleModel,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true, // para suspender/bloquear usuarios sin borrarlos
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt automáticamente
    versionKey: false, // elimina el __v
  }
);

// 👇 Index para mejorar búsquedas por userName o email
userSchema.index({ userName: 1, email: 1 });

const userModel = model("User", userSchema);

export default userModel;
