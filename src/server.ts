import app from "./app";

app.listen(process.env.PORT || "8081",()=>{
    console.log("Server started at http://localhost:8081");
});