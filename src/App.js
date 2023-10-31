import { useState } from "react";

function App() {
  const [bg, setBg] = useState('indigo');
  const name = ['red', 'yellow', 'green', 'blue', 'black', 'cyan', 'coral', 'orangered', 'pink'];
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: bg }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 mx-5">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {
              name.map((curElem, i) => {
                return (
                  <Button name={curElem} bg={() => setBg(curElem)} />
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
function Button({ name, bg }) {
  return (
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize" style={{ backgroundColor: name }} onClick={bg}>{name}</button>
  );
}

export default App;
