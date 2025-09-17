import { Schema, Types, model } from "mongoose";
import roleModel from "./role.model.js";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio"],
      unique: true,
      trim: true,
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
      maxlength: [30, "El nombre no puede superar los 30 caracteres"],
    },
    passWord: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [6, "La contraseña debe tener mínimo 6 caracteres"],
      select: false, // no se devuelve en queries por seguridad
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
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.index({ userName: 1, email: 1 });

/**
 * 🔑 Middleware para encriptar contraseña antes de guardar
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("passWord")) return next(); // si no cambió, no la vuelve a encriptar
  try {
    const salt = await bcrypt.genSalt(10);
    this.passWord = await bcrypt.hash(this.passWord, salt);
    next();
  } catch (error) {
    next(error);
  }
}); 

/**
 * 🔑 Método para comparar contraseñas
 * @param {string} candidatePassword - contraseña ingresada por el usuario
 * @returns {Promise<boolean>}
 */
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.passWord);
};

const userModel = model("User", userSchema);

export default userModel;
