import mongoose from "mongoose";

const depoimentoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  mensagem: {
    type: String,
    required: true
  }
});

const Depoimento = mongoose.model(
  "Depoimento",
  depoimentoSchema
);

export default Depoimento;
