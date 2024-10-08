import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ user }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: user.id,
      });
      setSuccessMessage(`Post created with ID: ${response.data.id}`);
      setTitle('');
      setBody('');
    } catch (err) {
      setError('Error creating post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold">Create Post for {user.name}</h2>
      <form onSubmit={handleSubmit} className="my-4 flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter the Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="text-black border p-2 w-full md:w-1/2 rounded"
        />
        <textarea
          rows="5"
          placeholder="Enter the Description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="text-black border p-2 w-full md:w-1/2 my-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
      {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default CreatePost;
