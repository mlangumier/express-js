import { Router } from "express";
const router = Router();

import controller from "./controller.js";
import authenticateToken from "../../middlewares/authorizations.js";

// https://expressjs.com/en/guide/using-middleware.html
router.use(authenticateToken);

router.route("/").get(controller.getUsers).post(controller.createUser);

export default router;
