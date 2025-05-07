import express from 'express';
const router = express.Router();
import UserService from '../service/userService';
const userService = new UserService()
router.get("/", (req, res) => {
  res.send("Welcome to the Blogging Platform API! userController");
});
router.get("/users", async (req, res) => {    
  const users = await userService.findAll();
  res.send(users);
});
router.get("/users/:id", async(req, res) => {
  const result = await userService.find(req.params.id); 
  res.send(result);
});
router.post("/users", async (req, res) => {
  const newUser = await userService.create(req.body);
  res.send("User created");
});
router.post("/users/batch", async (req, res) => {
  const newUsers = await userService.createMany(req.body);
  res.send("Users created in batch");
});
router.put("/users/", async(req, res) => {
  const updatedUser = await userService.update(req.body);
  res.send(`User with ID ${req.body.id} updated`);
});
router.delete("/users/:id", async (req, res) => {
  await userService.delete(req.params.id);
  res.send(`User with ID ${req.params.id} deleted`);
});

export default router;