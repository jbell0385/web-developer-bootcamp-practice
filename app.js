var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var campgrounds = [
  {
    name: "Camp 1",
    image:
      "https://www.oregonlive.com/resizer/0FVk7bpZHdb--Lw10Y-443t0ylM=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/DUNWFNGOAVCRLAHO4ZPTBKNJEM.jpg",
  },
  {
    name: "Camp 2",
    image:
      "https://static.rootsrated.com/image/upload/s--_i1nqUT1--/t_rr_large_traditional/oy9xsbijv8wehnrzv0zt.jpg",
  },
  {
    name: "Camp 3",
    image:
      "https://www.gannett-cdn.com/-mm-/615eb9b3dda3f2daf3ceb045278d833fb7918d51/c=0-286-5616-3459/local/-/media/2017/07/18/WIGroup/Milwaukee/636359756074681331-IMG-1848.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
  },
  {
    name: "Camp 1",
    image:
      "https://www.oregonlive.com/resizer/0FVk7bpZHdb--Lw10Y-443t0ylM=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/DUNWFNGOAVCRLAHO4ZPTBKNJEM.jpg",
  },
  {
    name: "Camp 2",
    image:
      "https://static.rootsrated.com/image/upload/s--_i1nqUT1--/t_rr_large_traditional/oy9xsbijv8wehnrzv0zt.jpg",
  },
  {
    name: "Camp 3",
    image:
      "https://www.gannett-cdn.com/-mm-/615eb9b3dda3f2daf3ceb045278d833fb7918d51/c=0-286-5616-3459/local/-/media/2017/07/18/WIGroup/Milwaukee/636359756074681331-IMG-1848.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
  },
];

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log("started on 3000");
});
