import mongoose from "mongoose";

const precioEspecialSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }, 
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true }, 
  precioEspecial: { type: Number, required: true },
  fechaAsignacion: { type: Date, default: Date.now } 
});

export default mongoose.model("PrecioEspecial", precioEspecialSchema, "precioEspecialesPlitt25");
