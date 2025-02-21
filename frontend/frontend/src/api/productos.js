import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const obtenerProductos = async () => {
  const { data } = await axios.get(`${API_URL}/productos`);
  return data;
};

export const obtenerPreciosEspeciales = async () => {
  const { data } = await axios.get(`${API_URL}/precios-especiales`);
  return data;
};
