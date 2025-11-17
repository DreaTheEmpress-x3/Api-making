const express = require("express");
const router = express.Router();
const formData = require("express-form-data");
router.use(formData.parse());

const Todo = require("../models/todos.model");

router.get("/", async (req, res) => {
    console.log("GET: hent alle qoutes");

    try {
        const todos = await Todo.find();

        res.status(200).json({ todos });
    } catch (error) {
        return res.status(400).json({
            message: "der skete en fejl" + error.message,
        });
    }

    res.status(200).json({
        message: "your quite the bugger",
    });
});

router.get("/:id", async (req, res) => {
    console.log("GET: hent alle qoutes" + req.params.id);
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json({ todo });
    } catch (error) {
        return res.status(400).json({
            message: "der skete en fejl" + error.message,
        });
    }
    res.status(200).json({
        message: "your quite the bugger" + req.params.id,
    });
});

router.post("/admin", async (req, res) => {
    console.log("POST: create qoutes");
    try {
        let todo = new Todo(req.body);
        await todo.save();
        res.status(201).json({
            message: "todo Post worked",
            created: todo,
        });
    } catch (error) {
        return res.status(400).json({
            message: "todo Post fucked",
            error: error.message,
            created: null,
        });
    }
    res.status(201).json({
        message: "your quite the POST bugger",
    });
});

router.put("/admin/:id", async (req, res) => {
    console.log("PUT: ret udvalgt todo med id:" + req.params.id);

    try {
        let todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (todo === null) {
            return res.status(404).json({
                message: "todo Put failed, not found",
                error: "Todo Not found",
                updated: null,
            });
        }
        res.status(201).json({
            message: "todo Put worked",
            updated: todo,
        });
    } catch (error) {
        return res.status(400).json({
            message: "todo Put failed, not found",
            error: "Todo Not found",
            updated: null,
        });
    }
});

router.delete("/:id", async (req, res) => {
    console.log("DELETE: slet udvalgt todo med id:" + req.params.id);
    try {
        let todo = await Todo.findByIdAndDelete(req.params.id);
        if (todo === null) {
            return res.status(404).json({
                message: "todo delete failed, not found",
                error: "qoute Not found",
                deleted: null,
            });
        }
        res.status(201).json({
            message: "todo delete worked",
            deleted: todo,
        });
    } catch (error) {
        return res.status(400).json({
            message: "todo delete failed, not found",
            error: "theres an error found",
            deleted: null,
        });
    }
});

module.exports = router;
