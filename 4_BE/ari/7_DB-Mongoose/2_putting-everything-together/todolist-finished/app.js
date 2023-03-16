//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const main = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");
};

main().catch((err) => console.log(err));

const itemsSchema = new mongoose.Schema({
  name: String,
});

const Item = new mongoose.model("Item", itemsSchema);

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema],
});

const List = mongoose.model("List", listSchema);

const item = new Item({
  name: "Welcome to your todolist!!!!!!!",
});

const item1 = new Item({
  name: "Hit the + button to add a new item.",
});

const item2 = new Item({
  name: "<-- Hit this to delete an item",
});

const defaultItems = [item, item1, item2];

// app.get("/", function (req, res) {
//   Item.find({})
//     .then((items) => {
//       if (items.length === 0) {
//         Item.insertMany(defaultItems)
//           .then(() => console.log("Items added to db"))
//           .catch((err) => console.log(err));
//         res.redirect("/");
//       } else {
//         res.render("list", { listTitle: "Today", newListItems: items });
//       }
//     })
//     .catch((err) => console.log(err));
// });

app.get("/", async (req, res) => {
  try {
    const result = await Item.find({});
    if (result.length === 0) {
      const insert = await Item.insertMany(defaultItems);
      console.log(insert);
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: result });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }).then((foundList, err) => {
      foundList.items.push(item);
      foundList.save();
      res.redirect(`/${listName}`);
    });
  }
});

app.post("/delete", async (req, res) => {
  try {
    const checkedId = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === "Today") {
      const result = await Item.deleteOne({ _id: checkedId });
      console.log(result);
      res.redirect("/");
    } else {
      const result = await List.findOneAndUpdate(
        { name: listName },
        { $pull: { items: { _id: checkedId } } }
      );
      console.log(result);
      res.redirect(`/${listName}`);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/:customListName", (req, res) => {
  const customListName = req.params.customListName;

  List.findOne({ name: customListName }).then((foundList, err) => {
    if (!err) {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defaultItems,
        });
        list.save();
        res.redirect(`/${customListName}`);
      } else {
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
      }
    }
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
