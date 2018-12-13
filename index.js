const express = require("express"); 
const path = require("path");
const expressEdge = require("express-edge");
const mongoose = require("mongoose");
const connectMongo = require("connect-mongo");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectFlash = require("connect-flash");
const edge = require("edge.js");
/** database model */
const Post = require("./database/models/Post");
/** import controllers */
const createPostController = require('./controllers/createPost');
const homePageController = require('./controllers/homePage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const createUserController = require("./controllers/createUser");
const storeUsercontroller = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const logoutController = require("./controllers/logout");
const addCommentController = require("./controllers/addComment");
const approveCommentController = require("./controllers/approveComment");
const deletePostController = require("./controllers/deletePost");
const deleteCommentController = require("./controllers/deleteComment");
const editPostController = require("./controllers/editPost");
const updatePostController = require("./controllers/updatePost");
/** import authentication middleware */
const auth = require("./middleware/auth");

const app = new express();


mongoose.connect("mongodb://localhost:27017/node-blog", { useNewUrlParser: true })
    .then(() => console.log("You are now connected to Mongo!"))
    .catch(err => console.log(`something went wrong: ${err}`))

/** keep sessions */
const mongoStore = connectMongo(expressSession)

/** session handler */
app.use(expressSession({
    secret: "secret",
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));


/** file upload */
app.use(fileUpload());
/** public folder */
app.use(express.static("public"));
/** view engine */
app.use(expressEdge);
app.set("views", __dirname + "/views");
/** body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(connectFlash());

/** conects with edge to help display some things */
app.use("*", (req,res,next) => {
    edge.global("auth", req.session.userId);
    next();
});


app.get("/", homePageController);
/** route for new post */
app.get("/posts/new", auth, createPostController);
/** post for create new post */
app.post("/posts/store", storePostController);
/** get route to handle click on single blog post */
app.get("/post/:id", getPostController);
/** post request for delete post */
app.post("/posts/delete/:id", deletePostController);
/** edit post get request*/
app.get("/posts/edit/:postId", editPostController);
/**update post POST request */
app.post("/posts/update/:postId", updatePostController);
/** get request for login */
app.get("/auth/login", loginController);
app.post("/users/login",loginUserController);
/** logout */
app.get("/auth/logout", logoutController);
/** route for creating new users */
app.get("/auth/register",createUserController);
/** post route to stroe new users */
app.post("/users/register",storeUsercontroller);

/** add comments */
app.post("/comments/add/:id", addCommentController);

/** approvecomments */
app.post("/comments/approve/:commentId/:postId", approveCommentController);

/** delete comment */
app.post("/comments/delete/:commentId", deleteCommentController);

// fix these *******************
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});




app.listen(3000, () => {
    console.log("App listening on port 3000");
});