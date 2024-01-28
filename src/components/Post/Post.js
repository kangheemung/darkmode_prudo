import PostList from "./PostList";
import React, { useState } from 'react';

function Post() {
    const [post,setPost]=useState("")
    const [posts, setPosts] = useState([]);
    // 新しいポストを追加する関数
    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };
const sendPostToAPI = async (newPost,jwtToken) =>{
  try {
    const res=await fetch ('#',{
      method : 'POST',
      headers:{
        'Content-type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      },
      body: JSON.stringify({post:{content: newPost}})
    });

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
 // If you want to do something with the response, like adding the returned post (with id from database) to the list
    const createdPost = await res.json();
    addPost(createdPost);
      } catch (error) {
    console.error("Failed to send post to API:", error);
    // Handle error case here
    }
    };

const handleSubmit = (e) => {
      e.preventDefault();
      if (!post) return;

        const jwtToken = localStorage.getItem('Token'); // Retrieve the JWT token from local storage or your state management solution
        if (jwtToken) {
            sendPostToAPI(post, jwtToken); // Pass the JWT token as an argument
        } else {
            alert('ログインが必要です。'); // Inform the user they need to be logged in
        }

        setPost('');        // Clear the input field
};
  return (
    <div>
    <form onSubmit ={handleSubmit}>
      <input
        type='text'
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="何か書いてください.." />
      <button type='submit'>投稿</button>
      postだよ
    </form>
     <PostList posts={posts} />
    </div>
  );
}

export default Post
