import React from "react";
import { Input, Icon } from "semantic-ui-react";

function SearchBar() {
  return (
    <div style={{ textAlign: "left" }}>
      <Input
        icon
        placeholder="Search..."
        style={{ width: "70vw", marginBottom: "20px" }}
      >
        <input />
        <Icon name="search" />
      </Input>
    </div>
  );
}

export default SearchBar;
