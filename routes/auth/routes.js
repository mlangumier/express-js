import { Router } from "express";
const router = Router();

import controller from "./controller.js";

router
  .post("/login", controller.login)
  .get("/refresh-token", controller.refreshToken)
  .delete("/refresh-token", controller.logout);

export default router;
