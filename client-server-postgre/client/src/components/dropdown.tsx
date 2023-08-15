import React, { useState } from "react";
import "./styles.css";

export default function UsersSelection({UsersList}) {
  const [users] = useState(UsersList);
  const [selectedUser, setSelectedUser] = useState("");


  function handleUserSelect(e) {
    console.log("Selected User", e.target.value);
    const usersSel = e.target.value;
    setSelectedUser(usersSel);
  }


  return (
    <div className="DropDown">
      <div className="Container">

        <select
          name="Users"
          onChange={e => handleUserSelect(e)}
          value={selectedUser}
        >
          <option value="">Select User</option>
          {users.map((User, key) => (
            <option key={key} value={User}>
              {User}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}