import express, { Application, Request, Response } from 'express';
import cors from "cors"
import auth from "../router/authRouter"
 


export const mainApp= (app:Application)=>{
app.use(express.json());
app.use(cors());

app.use("/api/v1", auth)
app.get("/api/v1",(req:Request, res:Response)=>{
    try {
        return res.status(200).json({
            message: "Success"
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error"
        });
    }
})
}

