import mongoose from "mongoose";

export default (dbhost?: string) => {
  const connect = () => {
    const db: string = dbhost || process.env.DB_HOST;
    mongoose
      .connect(db)
      .then(() => {
        return console.log(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        console.log("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
