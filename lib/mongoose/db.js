import mongoose, { mongo } from "mongoose";

const connection = {};

export async function connectDb() {
  // if already connected
  if(connection.isConnected){
    console.log("Already connected to the database.")
    return;
  }
  if(mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if(connection.isConnected === 1){
      console.log("Use previous conection to the databse.");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB0_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("New connection is created successfully and have connected to database also.")
  connection.isConnected = db.connections[0].readyState;
}

export async function disconnectDb(){
  if(connection.isConnected){
    if(process.env.NODE_END === "production"){
      await mongoose.disconnect();
      connection.isConnected = false;
    }else{
      console.log("not connecting to database.")
    }
  }
}

const db = {connectDb,disconnectDb}
export default db;