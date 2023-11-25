const express = require('express');
const cors = require('cors')

const axios = require('axios');

const app = express();
app.use(express.json())
app.use(cors())

const PORT = 3000;

// Define the /v1/users endpoint
app.get('/v1/users', async (req, res) => {
  try {
    // Fetch user data from the first API
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;

    // Fetch post data from the second API
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = postsResponse.data;

    // Combine post data with user data based on userId
    const combinedData = users.map(user => {
      const userPosts = posts.filter(post => post.userId === user.id);
      return { ...user, posts: userPosts };
    });

    // Check for search functionality
    const searchText = req.query.searchText;
    if (searchText) {
      const filteredData = combinedData.filter(user =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
      return res.json(filteredData);
    }

    // Send the combined data as the response
    res.json(combinedData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
