import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      {spring.map((e) => (
        <p key={e.id}>{e.name}</p>
      ))}
    </div>
  );
}

export default App;
