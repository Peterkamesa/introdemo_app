function Friends() {
    const friends = [
      { id: 1, name: 'Peter', age: 25 },
      { id: 2, name: 'Maya', age: 20 }
    ];
  
    return (
      <div>
        {friends.map(friend => (
          <p key={friend.id}>
            {friend.name} (Age: {friend.age})
          </p>
        ))}
      </div>
    );
  }
  
  export default Friends;