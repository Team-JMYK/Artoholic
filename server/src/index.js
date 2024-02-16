const express = require('express');
const cors = require('cors');
const knex = require('../db/knex.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({
  path: './.env',
});

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  allowedHeaders: [
    "set-cookie",
    "Content-Type",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Credentials",
  ],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

const JWT_SECRET = process.env.JWT_SECRET;

app.post('/sign-up', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json('Please provide username, email, and password');
  }

  try {
    const existingUser = await knex('user_table').where({ email }).first();
    if (existingUser) {
      return res.status(400).json('Email is already used');
    }
    const existingUsername = await knex('user_table')
      .where({ username })
      .first();
    if (existingUsername) {
      return res.status(400).json('Username is already in use');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await knex('user_table').insert({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res, send('User Signin successfully');
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating user' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const authToken = jwt.sign({ username, password }, "DUMMYKEY");

  const user = await knex('user_table').select("*").where("username", username).first();

  try {
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500).send("Error while comparing passwords");
        return;
      }

      if (result) {
        res.cookie("authToken", authToken, {
          path: "/",
          maxAge: 60 * 3,
          httpOnly: true,
        });

        res.status(200).json({ success: true });
      } else {
        console.log("Incorrect Password");
        res.status(401).send("Invalid credentials");
      }
    });
  } catch {
    res.status(400).send("Invalid credentials")
  }
});

app.get("/autoLogin", (req, res) => {
  const cookie = req.headers.cookie;

  if (!cookie || cookie === null) {
    return res.sendStatus(401);
  }
  return res.sendStatus(200);
});

app.get("/logout", (req, res) => {
  res.clear("authToken");
  return res.sendStatus(200);
});


//timestamp
const timeStamp = new Date().toISOString();


const userController = require("./user/user.controller.js");
const postController = require("./post/post.controller.js");

// USER ROUTES
app.get('/user_table', userController.getAll); //get all users
app.get('/user_table/:id', userController.getSingle); //get single user
app.post('/user_table', userController.addANewUser); //add new user
app.delete('/user_table/:id', userController.deleteAUser); //deleting user 
app.patch('/user_table/:id', userController.updateAUser); //user patch request

// POST ROUTES
app.get('/post_table', postController.allPost); //get all post
app.get('/post_table/:id', postController.singlePost); //get single post
app.post('/post_table', postController.addPost); //add new post
app.delete('/post_table/:id', postController.deleteAPost); // deleting post 
app.patch('/post_table/:id', postController.updateAPost) // update a post


// articles routes
app.post('/', (req, res) => { });

//test
app.get('/', (req, res) => {
  res.send('IM WORKING NOW :)');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running, ⚡️🏃');
});
