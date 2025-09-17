import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    // 👀 El header se accede con req.headers, no req.header
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    // El header suele venir así: "Bearer <token>"
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token inválido" });
    }

    // Verificamos el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guardamos el id en la request
    req.userId = decoded.id;

    next(); // 🚀 pasa al siguiente middleware/controlador
  } catch (error) {
    console.error(error);
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
};

export default verifyToken;
