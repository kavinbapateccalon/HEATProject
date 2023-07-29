// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import AuthContext from '../../utils/AuthProvider';

// const Friends = () => {
//   const [friends, setFriends] = useState([]);
//   const [friendNameToAdd, setFriendNameToAdd] = useState('');
//   const [friendNameToRemove, setFriendNameToRemove] = useState('');
//   const { accessToken } = useContext(AuthContext);

//   useEffect(() => {
//     axios
//       .get('/api/social/user/get-friends', {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       })
//       .then((response) => {
//         setFriends(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [accessToken]);

//   const addFriend = () => {
//     axios
//       .post(
//         `/api/social/${friendNameToAdd}/add-friend`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       )
//       .then((response) => {
//         // If the friend was successfully added, re-fetch the list of friends
//         setFriendNameToAdd('');
//         return axios.get('/api/social/user/get-friends', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//       })
//       .then((response) => {
//         setFriends(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const removeFriend = () => {
//     axios
//       .delete(`/api/social/${friendNameToRemove}/remove-friend`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       })
//       .then((response) => {
//         // If the friend was successfully removed, re-fetch the list of friends
//         setFriendNameToRemove('');
//         return axios.get('/api/social/user/get-friends', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//       })
//       .then((response) => {
//         setFriends(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="App">
//       <div className="auth-form-container">
//         <h1>Friends</h1>
//         <ul>
//           {friends.map((friend, index) => (
//             <li key={index}>{friend.displayName}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           value={friendNameToAdd}
//           onChange={(e) => setFriendNameToAdd(e.target.value)}
//           placeholder="Add friend by name"
//         />
//         <button onClick={addFriend}>Add Friend</button>
//         <input
//           type="text"
//           value={friendNameToRemove}
//           onChange={(e) => setFriendNameToRemove(e.target.value)}
//           placeholder="Remove friend by name"
//         />
//         <button onClick={removeFriend}>Remove Friend</button>
//       </div>
//     </div>
//   );
// };

// export default Friends;
