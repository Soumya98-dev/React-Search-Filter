import { Users } from "./users";
import "./App.css";
import React from "react";
import Table from "./Table";

function App() {
  const [query, setQuery] = React.useState("");

  const keys = ["first_name", "last_name", "email", "gender"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  // *** TO FILTER ON BASIS OF FIRSTNAME
  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* {query && (
        <ul className="list">
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)
          ).map((user, idx) => (
            <li key={idx} className="listItem">
              {user.first_name}
            </li>
          ))}
        </ul>
      )} */}
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
