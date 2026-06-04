import mongoose from "mongoose";

async function conectarMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/confeitaria");

    console.log("MongoDB conectado com sucesso!");
  } catch (erro) {
    console.error("Erro ao conectar no MongoDB:", erro);
  }
}

export default conectarMongo;