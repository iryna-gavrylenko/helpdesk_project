import dns from "dns"; //
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import app from "./app.js";

dns.setServers(["8.8.8.8"]); //

dotenv.config({
    path: "./.env"
});


const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error("error", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `Server is running on port ${process.env.PORT || 8000}`
            );
            console.log(
                `Open Helpdesk in browser: http://localhost:${process.env.PORT || 8000}`
            );
        });

    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1);
    }
};

startServer();
