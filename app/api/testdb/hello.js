import db from "../../../lib/mongoose/db";

export default function handler(req, res){
  db.connectDb();
  db.disconnectDb();
  res.status(200).json({name: "Jonh Dave"})
}