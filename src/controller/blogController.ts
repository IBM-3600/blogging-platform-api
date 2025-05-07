import  express  from "express";
import { BlogService } from "../service/blogService";
const router = express.Router();
const blogService = new BlogService()
router.get("/",(req, res) => {
   res.send("posts")
});
router.get("/posts", async(req, res) => {
  const result = await blogService.findAll();
  res.send(result);
});
router.get("/post/:id", async(req, res) => {
  const postId = req.params.id;
  const result = await blogService.find(postId);
  res.send(result);
});
router.post("/post", (req, res) => {
    blogService.create(req.body);
  res.send("New blog post created");    
});
router.post("/post/batch", async (req, res) => {
  const result = await blogService.createMany(req.body);
  res.send(result);    
});
router.put("/post/", (req, res) => {
  blogService.update(req.body);
  res.send(`Blog post with ID: updated`);
});
router.delete("/post/:id", (req, res) => {
  const postId = req.params.id;
  blogService.delete(postId);
  res.send(`Blog post with ID: ${postId} deleted`);
});

export default router;