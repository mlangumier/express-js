import { Router } from "express";
const router = Router();

import controller from "./controller.js";

router.route("/").get(controller.getHeroes).post(controller.createHero);

router
  .route("/:id")
  .get(controller.getHeroById)
  .put(controller.updateHero)
  .delete(controller.deleteHero);

export default router;
