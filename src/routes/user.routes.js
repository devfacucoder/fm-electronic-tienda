import { Router } from "express";

const userRoutes = Router();
import { createUser,login } from "../controllers/user.ctrl.js";
import verifyToken from "../validators/verifyToken.js";
userRoutes.post("/", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const newUser = await createUser(username, password, email);

    res.status(200).json({ message: "user created sucesfully", data: newUser });
  } catch (error) {
    console.log(error);
  }
});
userRoutes.post("/login",login)
export default userRoutes;
