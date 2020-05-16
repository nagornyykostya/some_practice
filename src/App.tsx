import React from 'react';

const someString : string = "Hello Type Script";
let someNumber : number;

someNumber = 2;
function App() {
  return (
   <div>
     {someString}
     {someNumber}
    </div>
  );
}

export default App;
