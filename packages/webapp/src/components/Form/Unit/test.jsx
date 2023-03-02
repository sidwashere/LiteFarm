import React, { useState } from 'react';

export default function Test() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>NUMBER: {number}</div>
      <button onClick={() => setNumber(1)}>CLICK!</button>
    </div>
  );
}
