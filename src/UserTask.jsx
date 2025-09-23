function UserTask() {
  return (
    <div className="user-task">
      <span className="task-name">Task</span>
      <span className="task-description">Desc</span>
      <div className="task-buttons">
        <button className="focus">Focus</button>
        <button className="delete">Remove</button>
      </div>
    </div>
  );
}

export default UserTask;
