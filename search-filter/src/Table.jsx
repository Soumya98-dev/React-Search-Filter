import React from "react";

function Table({ data }) {
  return (
    <table>
      <tr>
        <th>first_name</th>
        <th>last_name</th>
        <th>email</th>
        <th>gender</th>
      </tr>
      {data.map((user) => (
        <tr key={user.id}>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
