/*
  1. Import mongoose from mongoose
  2. Set const connectDB asyc function
  3. try{const conn = await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true,useNewUrlParse:true,useCreateIndex:true})}
  4. catch (error){console.error(`Error: ${error.message}`)
  process.exit(1)}
  5. Set export default connectDB
  6. Import to server.js
*/
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB