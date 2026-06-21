import mongoose from "mongoose";

const DepoimentoSchema = new mongoose.Schema({

nome: {
type: String,
required: true
},

mensagem: {
type: String,
required: true
},

data: {
type: Date,
default: Date.now
}

});

export default mongoose.model("Depoimento", DepoimentoSchema);