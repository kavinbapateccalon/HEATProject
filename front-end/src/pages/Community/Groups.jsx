import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../utils/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Groups = () => {
  const { accessToken, isLoggedIn } = useContext(AuthContext);
  const [myGroups, setMyGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [activeTab, setActiveTab] = useState('myGroups');
  const [groupName, setGroupName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && isLoggedIn) {
      Promise.all([
        axios.get('/api/social/group/my-groups', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        axios.get('/api/social/group/all', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      ])
        .then(([myGroupsResponse, allGroupsResponse]) => {
          setMyGroups(myGroupsResponse.data);
          const myGroupIds = new Set(
            myGroupsResponse.data.map((group) => group.id)
          );
          const filteredAllGroups = allGroupsResponse.data.filter(
            (group) => !myGroupIds.has(group.id)
          );
          setAllGroups(filteredAllGroups);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [accessToken, isLoggedIn]);

  const handleJoin = (groupToJoin) => {
    axios
      .post(
        `/api/social/group/${groupToJoin.id}/join`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        // Refresh the groups
        setActiveTab('myGroups');
        setMyGroups((prevGroups) => [...prevGroups, groupToJoin]);
        setAllGroups((prevGroups) =>
          prevGroups.filter((group) => group.id !== groupToJoin.id)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreate = () => {
    axios
      .post(
        '/api/social/group/create',
        { name: groupName },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        // Refresh the groups
        setGroupName('');
        setActiveTab('myGroups');
        setMyGroups((prevGroups) => [...prevGroups, response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleView = (groupId) => {
    navigate(`/community/group/${groupId}`);
  };

  return (
    <div className="App">
      <div className="groups-page">
        <div className="tabs">
          <button
            className={`tab-button ${
              activeTab === 'myGroups' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('myGroups')}
          >
            My Groups
          </button>
          <button
            className={`tab-button ${
              activeTab === 'searchGroups' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('searchGroups')}
          >
            Search Groups
          </button>
          <button
            className={`tab-button ${
              activeTab === 'createGroup' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('createGroup')}
          >
            Create Group
          </button>
        </div>
        <div className="auth-form-container">
          {activeTab === 'myGroups' ? (
            <div>
              {myGroups.map((group) => (
                <div key={group.id} className="group-item">
                  <button onClick={() => handleView(group.id)}>
                    View
                  </button>
                  <h2>{group.name}</h2>
                  {/* Add more group details here */}
                </div>
              ))}
            </div>
          ) : activeTab === 'searchGroups' ? (
            <div>
              {allGroups.map((group) => (
                <div key={group.id} className="group-item">
                  <button onClick={() => handleJoin(group)}>
                    Join
                  </button>
                  <h2>{group.name}</h2>
                  {/* Add more group details here */}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                placeholder="Group Name"
                value={groupName}
                onChange={(event) => setGroupName(event.target.value)}
              />
              <button onClick={handleCreate}>Create Group</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Groups;
