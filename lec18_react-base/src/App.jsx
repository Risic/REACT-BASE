import React from 'react';
import RayPhoto from "./images/Ray.jpg";
import Post from './components/Post';
import './App.css';

const RAY_IMAGE = RayPhoto;

let newDate = new Date('December 17, 1995 03:24:00');

const post = {
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: RAY_IMAGE,
  date: `${newDate.getDate()}/${newDate.getMonth() + 1}`
};

function App() {
  return (
    <div className="App">
      <Post content={post.content} image={post.image} date={post.date}/>
    </div>
  );
}

export default App;
