import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const router = Router();
const usuarioController = new UsuarioController();

router.post("/usuarios", (req, res) => {
    usuarioController.criar(req, res);
});

router.put("/usuarios/:id", (req, res) => {
    usuarioController.atualizar(req, res);
});

router.get("/usuarios", (req, res) => {
    usuarioController.listar(req, res);
});

router.get("/usuarios/:id", (req, res) => {
    usuarioController.buscarPorId(req, res);
})

router.delete("/usuarios/:id", (req, res) => {
    usuarioController.excluir(req, res);
});

export default router;