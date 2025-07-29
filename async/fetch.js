const fetch = require('node-fetch');

async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching:", err);
  }
}

getPost();
