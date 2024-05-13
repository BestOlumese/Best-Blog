import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/connectToMongoDB.js";
import errorUtil from "./utils/errorUtil.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import path from "path";
connectToMongoDB();

const app = express()
dotenv.config();

const __dirname = path.resolve();   

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(errorUtil)

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})