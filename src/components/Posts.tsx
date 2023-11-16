import React from 'react';
import Post from './Post';

export default function Posts() {
  const post = [
    {
      id: '1',
      username: 'becode',
      userImg: '/vegeta.jpg',
      img: 'https://images.unsplash.com/photo-1682687982141-0143020ed57a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Nice picture',
    },
    {
      id: '2',
      username: 'jsbrasil',
      userImg: '/vegeta.jpg',
      img: 'https://images.unsplash.com/photo-1699296953780-87c772058e6f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Nice picture',
    },
  ];

  return (
    <div>
      {post.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
