const mongoose = require("../database");

const BookSchema = new mongoose.Schema({
  volumeId: {
    type: String,
    required: true,
    unique: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  subTitulo: {
    type: String,
    default: "",
  },
  edicao: {
    type: Number,
    required: false,
  },
  autores: {
    type: Array,
    required: true,
  },
  sinopse: {
    type: String,
    required: false,
  },
  paginas: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  finalizadoEm: {
    type: Date,
    required: false,
  },
  anoLido: {
    type: String,
    required: false,
  },
  criadoEm: {
    required: true,
    type: Date,
    default: Date.now,
  },
});

BookSchema.pre("save", function (next) {
  if (this.finalizadoEm) {
    this.anoLido = new Date(this.finalizadoEm).getFullYear();
  }

  next();
});

module.exports = mongoose.model("Book", BookSchema);
