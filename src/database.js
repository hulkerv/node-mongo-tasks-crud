import { connect } from 'mongoose';
import { URI } from "./config";

(async () => {
  try {
    const db = await connect(URI);
    console.log(`DB Connected to ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
})()