import React, { useState } from 'react';
import UserList from './UserList';
import CreatePost from './CreatePost';
import CommentsList from './CommentsList';

const ApiViz = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [postId, setPostId] = useState(null); // For storing the fetched post ID
  const [inputValue, setInputValue] = useState(''); // New state for input value

  const handlePostIdChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGetComments = () => {
    setPostId(inputValue);
  };

  return (
    <div className="bg-black-100 container mx-auto rounded p-6">
      <UserList onSelectUser={setSelectedUser} />
      {selectedUser && <CreatePost user={selectedUser} />}

      <div className="my-6 flex justify-center">
        <input
          type="number"
          placeholder="Enter Post ID"
          value={inputValue}
          onChange={handlePostIdChange}
          className="border rounded p-2 mr-2 text-black"
        />
        <button
          onClick={handleGetComments}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Get Comments
        </button>
      </div>

      {postId && <CommentsList postId={postId} />}
    </div>
  );
};

export default ApiViz;