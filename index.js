const db = require("./DB");
const express = require("express");
const app = express();
const dbcontext = db.studentsDatabase();

app.use(express.json());

app.get("/students", async (req, res) => {
    console.log(req.method);
    res.status(200).send(await dbcontext.list());
})

app.get("/students/:id", async (req, res) => {
    console.log(req.method);
    const student = await dbcontext.get(req.params.id);
    res.status(200).send(student);
})

app.post("/students", async (req, res) => {
    console.log(req.method);
    res.status(200).send(await dbcontext.insert(req.body));
})

app.put("/students/:id", async (req, res) => {
    console.log(req.method);
    res.status(200).send(await dbcontext.update(req.body, req.params.id));
})

app.delete("/students/:id", async (req, res) => {
    console.log(req.method);
    await dbcontext.del(req.params.id);
    res.status(200).send("Sucess!!");
})

app.listen(3000, () => {
    console.log("API initied");
})