import React from 'react';

interface StoryProps {
  username: string;
  img: string;
}

export default function Story({ username, img }: StoryProps) {
  return (
    <div>
      <img src={img} alt={username} />
      <p>{username}</p>
    </div>
  );
}
