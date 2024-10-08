'use client';
import React, { useState, useEffect } from 'react';
import 'minifaker/locales/en';
import minifaker from 'minifaker';
import Story from './Story';

interface StoryProps {
  username: string;
  img: string;
  id: number | string;
}

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState<StoryProps[]>([]);

  useEffect(() => {
    const stories: StoryProps[] = minifaker.array(20, (i: number) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));

    setStoryUsers(stories);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
