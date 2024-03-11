import { Router, Response, Request } from "express";
import sendMessage from "../utils/send_message";

const router = Router();

router.post("/send", async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    sendMessage(text);
  } catch (e) {
    console.log(e);
  }

  res.redirect("/");
});

export default router;
