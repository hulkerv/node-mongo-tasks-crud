import { config } from "dotenv";
config();
export const URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3000;
