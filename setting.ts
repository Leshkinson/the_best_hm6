import express, {Request, Response, Router} from "express";
import bodyParser from "body-parser";
import {postsRouter} from "./src/routers/posts-router";
import {blogsRouter} from "./src/routers/blogs-router";
import {testingRouter} from "./src/routers/testing-router";
import {userRouter} from "./src/routers/users-router";
import {authRouter} from "./src/routers/auth-router";

export const app = express()

app.use(bodyParser.json())
app.use('/posts', postsRouter)
app.use('/blogs', blogsRouter)
app.use('/users', userRouter)
app.use('/auth/login', authRouter)

//---TEST---//
app.use('/testing', testingRouter)
