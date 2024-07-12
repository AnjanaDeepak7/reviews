import { useState } from "react";
import data from "./components/data";

function App() {
  const users = data;
  const [count, setCount] = useState(0);
  console.log(users);

  const setNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    } else if (number < 0) {
      return data.length - 1;
    } else return number;
  };

  const handleIncrement = () => {
    setCount((count) => {
      const newCount = count + 1;
      return setNumber(newCount);
    });
  };
  const handleDecrement = () => {
    setCount((count) => {
      const newCount = count - 1;
      return setNumber(newCount);
    });
  };

  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * users.length);
    console.log(randomNumber);
    setCount(randomNumber);
  };

  return (
    <>
      <h2 className="main-heading">Our Reviews</h2>
      <div className="underline"></div>
      <article className="container" key={users[count].id}>
        <img src={users[count].image} alt={users[count].name} />
        <h5 className="name">{users[count].name}</h5>
        <p className="job">{users[count].job}</p>
        <p className="text">{users[count].text}</p>
        <div className="btn-container">
          <button className="left-btn" onClick={handleDecrement}>
            &#8592;
          </button>
          <button className="right-btn" onClick={handleIncrement}>
            &#8594;
          </button>
        </div>
        <button className="surprise-btn" onClick={handleRandom}>
          Surprise Me
        </button>
      </article>
    </>
  );
}

export default App;
