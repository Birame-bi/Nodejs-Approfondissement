const express = require("express");
const usersController = require("./users.controller");
const router = express.Router();

// Route pour récupérer les données de l'utilisateur actuellement authentifié
router.get("/me", usersController.me);

// Routes existantes
router.get("/", usersController.getAll);
router.get("/:id", usersController.getById);
router.post("/", usersController.create);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);

module.exports = router;

