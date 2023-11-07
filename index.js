const express = require("express");
require("dotenv").config();
(app = express()),
  (port = process.env.PORT || 3000),
  (cors = require("cors")),
  (controller = require("./controllers/artControllers")),
  (multerLib = require("multer")());

app.use(express.json({ strict: false }));
app.use(cors());
app.post(
  "/create-with-imagekit",
  multerLib.single("image"),
  controller.createWithImageKit
);
app.get("/art", controller.getAllArt);
app.get("/art/:artId", controller.getArtById);
app.put("/art/:artId", controller.update);
app.delete("/art/:artId", controller.delete);

app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});
