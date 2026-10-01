import express ,{Response , Request} from "express";
import cors from "cors";

import nutritionRoutes from "./routes/nutrition.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req :Request, res : Response) => {
  res.json({
    message: "Nutrition API running"
  });
});

app.use("/api/nutrition", nutritionRoutes);

export default app;