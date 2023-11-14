const coccionesModel = require("../models/coccionesModel");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const document = await coccionesModel.find();
      res.json(document);
    } catch (e) {
      console.log(e);
      next(e);
    }
  },

  create: async function (req, res, next) {
    try {
      const cocciones = new coccionesModel({
        titulo: req.body.titulo,
        grano1: req.body.grano1,
        cantidadGrano1: req.body.cantidadGrano1,
        grano2: req.body.grano2,
        cantidadGrano2: req.body.cantidadGrano2,
        grano3: req.body.grano3,
        cantidadGrano3: req.body.cantidadGrano3,
        grano4: req.body.grano4,
        cantidadGrano4: req.body.cantidadGrano4,
        grano5: req.body.grano5,
        cantidadGrano5: req.body.cantidadGrano5,
        grano6: req.body.grano6,
        cantidadGrano6: req.body.cantidadGrano6,
        grano7: req.body.grano7,
        cantidadGrano7: req.body.cantidadGrano7,
        lupulo1: req.body.lupulo1,
        cantidadLupulo1: req.body.cantidadLupulo1,
        lupulo2: req.body.lupulo2,
        cantidadLupulo2: req.body.cantidadLupulo2,
        lupulo3: req.body.lupulo3,
        cantidadLupulo3: req.body.cantidadLupulo3,
        lupulo4: req.body.lupulo4,
        cantidadLupulo4: req.body.cantidadLupulo4,
        lupulo5: req.body.lupulo5,
        cantidadLupulo5: req.body.cantidadLupulo5,
        lupulo6: req.body.lupulo6,
        cantidadLupulo6: req.body.cantidadLupulo6,
        levadura: req.body.levadura,
        notaDeCoccionYcata: req.body.notaDeCoccionYcata
      });
      const document = await cocciones.save();
      res.json(document);
    } catch (e) {
      console.log(e);
      if (e.message) {
        res.json({ status: "errors", message: e.message });
        return;
      }
      next(e);
    }
  },
  getById: async function (req, res, next) {
    try {
      const document = await coccionesModel.findById(req.params.id);
      res.json(document);
    } catch (e) {
      console.log(e);
      next(e);
    }
  },
  
  update: async function (req, res, next) {
    try {
      const document = await coccionesModel.updateOne(
        { _id: req.params.id },
        req.body
      );
      res.json(document);
    } catch (e) {
      next(e);
    }
  },
  
 /*
  update: async function (req, res, next) {
    try {
      const updatedField = {
        notaDeCoccionYcata: req.body.notaDeCoccionYcata,
      };
  
      const document = await coccionesModel.findByIdAndUpdate(
        req.params.id,
        updatedField,
        { new: true }
      );
  
      if (!document) {
        return res.status(404).json({ message: "Recipe not found" });
      }
  
      res.json(document);
    } catch (e) {
      console.error(e);
      next(e);
    }
  },
  */
  delete: async function (req, res, next) {
    try {
      const document = await coccionesModel.deleteOne({ _id: req.params.id });
      res.json(document);
    } catch (e) {
      next(e);
    }
  },
};
