import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../utils/AuthProvider';

const GroupView = () => {
  const { groupId } = useParams();
  const { accessToken } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [activeTab, setActiveTab] = useState('group');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(() => {
    Promise.all([
      axios.get(`/api/social/group/${groupId}/get-posts`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      axios.get(`/api/social/group/${groupId}/get-group`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    ])
      .then(([postsResponse, groupResponse]) => {
        setPosts(postsResponse.data);
        setGroupName(groupResponse.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [groupId, accessToken]);

  const handleCreatePost = () => {
    axios
      .post(
        `/api/social/group/${groupId}/create-post`,
        { title: postTitle, body: postBody },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        // Reset the post title and body
        setPostTitle('');
        setPostBody('');

        // Add the new post to the list of posts
        setPosts([...posts, response.data]);

        // Redirect to the 'Group' tab
        setActiveTab('group');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="group-view">
        <div className="tabs">
          <button
            className={`tab-button ${
              activeTab === 'group' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('group')}
          >
            Group
          </button>
          <button
            className={`tab-button ${
              activeTab === 'posts' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('posts')}
          >
            Posts
          </button>
        </div>
        {activeTab === 'group' ? (
          <div className="auth-form-container">
            <h1>{groupName}</h1>
            {posts.map((post) => (
              <div key={post.id} className="post-container">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="auth-form-container">
            <input
              type="text"
              placeholder="Post Title"
              value={postTitle}
              onChange={(event) => setPostTitle(event.target.value)}
            />
            <input
              type="text"
              placeholder="Post Body"
              value={postBody}
              onChange={(event) => setPostBody(event.target.value)}
            />
            <button onClick={handleCreatePost}>Create Post</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupView;
