import express from "express";
import Producto from "../models/Producto.js";
import PrecioEspecial from "../models/PrecioEspecial.js";
const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "El campo 'name' es requerido" });
    }

    const newUser = new User({ name });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
});

router.get("/productos", async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

router.get("/precios-especiales", async (req, res) => {
  try {
    const precios = await PrecioEspecial.find().populate({
      path: "productoId",
      select: "name price category"
    });
    res.json(precios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los precios especiales", error });
  }
});
  
  router.post("/precios-especiales", async (req, res) => {
    try {
      const { usuarioId, productoId, precioEspecial } = req.body;
      const nuevoPrecio = new PrecioEspecial({ usuarioId, productoId, precioEspecial });
      await nuevoPrecio.save();
      res.status(201).json(nuevoPrecio);
    } catch (error) {
      res.status(500).json({ message: "Error al registrar el precio especial", error });
    }
  });

router.put("/precios-especiales/:id", async (req, res) => {
    try {
      const { precioEspecial } = req.body;
      const precioActualizado = await PrecioEspecial.findByIdAndUpdate(
        req.params.id,
        { precioEspecial },
        { new: true }
      );
      res.json(precioActualizado);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el precio especial", error });
    }
  });
  
  router.delete("/precios-especiales/:id", async (req, res) => {
    try {
      await PrecioEspecial.findByIdAndDelete(req.params.id);
      res.json({ message: "Precio especial eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el precio especial", error });
    }
  });

export default router;