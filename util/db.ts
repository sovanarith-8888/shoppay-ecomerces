import mongoose from "mongoose";

const connection = {
  isConnected: true
};

export async function connectDb(){
  if(connection.isConnected){
    console.log("Alreay connected to the database.")
    return;
  }
  if(mongoose.connections.length > 0){
    
  }
}