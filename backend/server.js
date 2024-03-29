import express from 'express';
import dotenv from  'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import equipmentRoute from './routes/equipments.js';

dotenv.config()
const app = express()
const port = process.env.PORT  || 8000;

const corsOptions = {
  origin: true,
  credentials: true
}


// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('MongoDB is Connected..!');

  } catch (err) {
    console.log('Connection Error..!');
    console.log(err);
  }
}

// testing
app.get('/', (req, res) => {
  res.send('working..!');
});


//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/users", userRoute)
app.use("/auth", authRoute)
app.use("/equipments", equipmentRoute)

app.listen(port, ()=> {
  connect();
  console.log("Server running on http: ", port);
});
