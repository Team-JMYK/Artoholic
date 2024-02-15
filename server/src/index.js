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
// const corsOptions = {
//   origin: 'https://wolf-frontend.onrender.com',
//   credentials: true,
// };
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  // allowedHeaders: [
  //   // "set-cookie",
  //   "Content-Type",
  //   "Access-Control-Allow-Origin",
  //   "Access-Control-Allow-Credentials",
  // ],
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
    // const user = await knex('user_table').where({ username }).first();
    // const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '3d' });
    // console.log(JWT_SECRET);
    //res.status(201).json({ success: true, token });
    res, send('User Signin successfully');
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating user' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await knex('user_table').select("*").where("username", username).first();
  bcrypt.compare(password, user.password, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Error while comparing passwords");
      return;
    }

    if (result) {
      console.log("User Authenticated");
      res.status(200).json({ success: true });
    } else {
      console.log("Incorrect Password");
      res.status(401).send("Invalid credentials");
    }
  });

});

// const isAuthenticated = (req, res, next) => {
//   const token = req.cookies.token;

//   if (token) {
//     try {
//       const decoded = jwt.verify(token, JWT_SECRET);
//       req.user = { id: decoded.userId };
//       next();
//     } catch (error) {
//       res.status(401).send('Unauthorized');
//     }
//   } else {
//     res.status(401).send('Unauthorized');
//   }
// };
// app.get('/dashboard', isAuthenticated, (req, res) => {
//   res.send('This is a protected route');
// });

// app.get('/dashboard', authenticateToken, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const userData = await knex('user_table').where({ id: userId }).first();

//     if (userData) {
//       res.json(userData);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching dashboard data:', error);
//     res.status(500).json({ error: 'Error fetching dashboard data' });
//   }
// });

// function authenticateToken(req, res, next) {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json('Unauthorized');

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json('Forbidden');
//     req.user = user;
//     next();
//   });
// }

//timestamp
const timeStamp = new Date().toISOString();

const userController = require("./user/user.controller.js");
const postController = require("./post/post.controller.js");

//get all users
app.get('/user_table', userController.getAll);

//get single user
app.get('/user_table/:id', userController.getSingle);

//add new user
app.post('/user_table', userController.addANewUser);

//deleting user
app.delete('/user_table/:id', userController.deleteAUser);

//user patch request 
app.patch('/user_table/:id', userController.updateAUser);

//get all post
app.get('/post_table', postController.allPost);

//get single post
app.get('/post_table/:id', postController.singlePost);

//add new post

app.post('/post_table', postController.addPost);


// deleting post
app.delete('/post_table/:id', postController.deleteAPost);

// update a post 

app.patch('/post_table/:id', postController.updateAPost)

// user patch request
// app.patch('/user_table/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { first_name, last_name, username, email, password, bio, image } =
//       req.body;

//     const updatedUser = {};
//     if (first_name) updatedUser.first_name = first_name;
//     if (last_name) updatedUser.last_name = last_name;
//     if (username) updatedUser.username = username;
//     if (email) updatedUser.email = email;
//     if (password) updatedUser.password = password;
//     if (bio) updatedUser.bio = bio;
//     if (image) updatedUser.image = image;

//     await knex('user_table').where('id', '=', id).update(updatedUser);

//     res.status(200).send(updatedUser);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Error updating user');
//   }
// });

//post patch request
// app.patch('/post_table/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { slug, title, description, body } = req.body;

//     // Build an object containing the fields to update
//     const updatedPost = { updateAt: timeStamp };
//     if (slug) updatedPost.slug = slug;
//     if (title) updatedPost.title = title;
//     if (description) updatedPost.description = description;
//     if (body) updatedPost.body = body;

//     // Update the user in the database
//     await knex('post_table').where('id', '=', id).update(updatedPost);

//     res.status(200).send(updatedPost);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Error updating user');
//   }
// });

// articles routes
app.post('/', (req, res) => { });

//test
app.get('/', (req, res) => {
  res.send('IM WORKING NOW :)');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running, ⚡️🏃');
});
