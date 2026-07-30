import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
        message: "Welcome to the Home Page!"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;