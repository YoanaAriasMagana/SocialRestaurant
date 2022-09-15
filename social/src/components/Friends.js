import React from "react";


const Friends = () => {
  const [friends, setFriends] = React.useState([]);
  const [friend, setFriend] = React.useState("");
  const [friendEditing, setFriendEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("friends");
    const loadedFriends = JSON.parse(json);
    if (loadedFriends) {
      setFriends(loadedFriends);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(friends);
    localStorage.setItem("friends", json);
  }, [friends]);

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      id: new Date().getTime(),
      text: friend,
      completed: false,
    };
    setFriends([...friends].concat(newFriend));
    setFriend("");
  }

  function deleteFriend(id) {
    let updatedFriends = [...friends].filter((friend) => friend.id !== id);
    setFriends(updatedFriends);
  }


  return (
    <div id="friend-list">
      <h1>My Friends</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setFriend(e.target.value)}
          value={friend}
        />
        <button type="submit">Add Friend</button>
      </form>
      {friends.map((friend) => (
        <div key={friend.id} className="friend">
          <div className="friend-text">
            {friend.id === friendEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{friend.text}</div>
            )}
          </div>
          <div className="friend-actions">
            <button onClick={() => deleteFriend(friend.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;