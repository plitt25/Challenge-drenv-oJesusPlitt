import dotenv from "dotenv";
dotenv.config();

export const PORT = 3000;
export const MONGO_URI = 'mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda';

console.log("Conectando a MongoDB en:", MONGO_URI);