import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      if (!postId) return;
      setLoading(true);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        setComments(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      {loading && (
        <div className="flex justify-center my-6">
          <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="black" 
            ariaLabel="three-dots-loading"
          />
        </div>
      )}

      {error && <p className="text-red-500">Error fetching comments: {error}</p>}

      {!loading && !error && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="p-4 m-2 bg-gray-900 text-white rounded">
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
