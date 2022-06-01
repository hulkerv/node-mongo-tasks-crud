import { PORT } from "./config";
import app from "./app";
import "./database";
app.listen(PORT);
console.log("Server on port", PORT);
