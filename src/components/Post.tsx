import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { CiHeart, CiBookmark } from 'react-icons/ci';
import { BsChatDots } from 'react-icons/bs';

interface PostProps {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

export default function Post({
  id,
  username,
  userImg,
  img,
  caption,
}: PostProps) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <BsThreeDots classname="h-5" />
      </div>

      {/* Post Image */}
      <img className="object-cover w-full" src={img} alt={username} />

      {/* Post Button */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <CiHeart className="btn" />
          <BsChatDots className="btn" />
        </div>
        <CiBookmark className="btn" />
      </div>
    </div>
  );
}
