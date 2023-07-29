import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [Value, setValue] = useState(0);
  function handleChange(event) {
    setValue(Value + event.target.value);
  }

  useEffect(() => {
    if (Value.toString().charAt(0) === "0") {
      setValue(Number(Value.toString().slice(1)));
    }
  }, [Value]);

  function handleDelete() {
    setValue(Number(Value.toString().slice(0, -1)));
  }

  function evaluate() {
    setValue(eval(Value.toString()));
  }

  return (
    <>
      <div className="p-4 text-white bg-indigo-400 rounded-lg">
        <h1 className="text-2xl">Caculator App</h1>
        <p className="text-sm text-center">
          This is a Calculator App designed by me to learn React. It uses
          `useState` and `useEffect` hooks to run.
        </p>
        <h1 className="text-2xl font-bold">About Me</h1>
        <p className="text-sm text-center">
          I am Virinchi, a front-end developer. I love building web applications
          using React and tailwindcss. You can clone this project from
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/ChivukulaVirinchi/react-calculator"
          >
            here
          </a>
          . For more such fun projects, follow me on
          <a
            className="text-blue-500 hover:underline"
            href="https://twitter.com/Virinchi_cv"
          >
            twitter
          </a>
          and check out my
          <a
            className="text-blue-500 hover:underline"
            href="https://virinchi.me"
          >
            website
          </a>
          for more details.
        </p>
      </div>
      <div className="flex items-center justify-center min-h-screen px-5 py-5 bg-gray-100 min-w-screen">
        <div className="relative w-full mx-auto overflow-hidden text-gray-800 bg-gray-100 shadow-xl lg:w-1/2 rounded-xl">
          <div className="flex items-end w-full h-40 text-right bg-gradient-to-b from-gray-800 to-gray-700">
            <div
              data-placeholder="0"
              className="w-full px-6 py-5 text-6xl font-thin text-white"
            >
              {Value}
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
            <div className="flex w-full">
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  onClick={() => {
                    setValue(0);
                  }}
                  className="w-full h-16 text-xl font-light text-white text-opacity-50 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  C
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  onClick={handleDelete}
                  className="w-full h-16 text-xl font-light text-white text-opacity-50 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  ⌫
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="%"
                  onClick={() => {
                    setValue(Value / 100);
                  }}
                  className="w-full h-16 text-xl font-light text-white text-opacity-50 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  %
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="÷"
                  value={"/"}
                  onClick={handleChange}
                  className="w-full h-16 text-2xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-10 hover:bg-opacity-20"
                >
                  ÷
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="7"
                  onClick={handleChange}
                  value={7}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  7
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="8"
                  onClick={handleChange}
                  value={8}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  8
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="9"
                  onClick={handleChange}
                  value={9}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  9
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="⨉"
                  value={"*"}
                  onClick={handleChange}
                  className="w-full h-16 text-xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-10 hover:bg-opacity-20"
                >
                  ⨉
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="4"
                  onClick={handleChange}
                  value={4}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  4
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="5"
                  onClick={handleChange}
                  value={5}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  5
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="6"
                  onClick={handleChange}
                  value={6}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  6
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="-"
                  value={"-"}
                  onClick={handleChange}
                  className="w-full h-16 text-xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-10 hover:bg-opacity-20"
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="1"
                  onClick={handleChange}
                  value={1}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  1
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="2"
                  onClick={handleChange}
                  value={2}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  2
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="3"
                  onClick={handleChange}
                  value={3}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  3
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  id="+"
                  value={"+"}
                  onClick={handleChange}
                  className="w-full h-16 text-xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-10 hover:bg-opacity-20"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-indigo-400">
                <button
                  id="0"
                  onClick={handleChange}
                  value={0}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  0
                </button>
              </div>
              <div className="w-1/4 border-r border-indigo-400">
                <button
                  onClick={handleChange}
                  value={"."}
                  className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
                >
                  .
                </button>
              </div>
              <div className="w-2/4 border-r border-indigo-400">
                <button
                  onClick={evaluate}
                  className="w-full h-16 text-xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-30 hover:bg-opacity-40"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
