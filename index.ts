import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dao from "./repositories/dao";
import { authenticated, authMiddleware } from "./controllers/auth.controller";
import authRoutes from "./routes/auth.routes";
import employeesRoutes from "./routes/employees.routes";
import * as swaggerJson from "./swagger.json";
import * as swaggerUI from "swagger-ui-express";

const port = process.env.PORT;
export const app = express();
app.use(
  ["/openapi", "/docs", "/swagger"],
  swaggerUI.serve,
  swaggerUI.setup(swaggerJson)
);

app.listen(port, () =>
  console.log(`Invenco test app listening on port ${port}!`)
);
app.use(express.json());
app.use(authMiddleware);

//  Script to setup sqlite DB in memory //
dao.setupDbForDev();
////////////////////////////////////

app.use("/api/auth", authRoutes);
app.use("/api/employees", authenticated, employeesRoutes);
