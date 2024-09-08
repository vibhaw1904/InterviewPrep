import "./styles.css";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
export default function App() {
  const stars = Array(5).fill(0);
  const [rating, setRating] = useState(0);
  const [colors, setColors] = useState(Array(5).fill("gray"));

  const handleClick = (value) => {
    if (value === rating) {
      setRating(0);
      setColors(Array(5).fill("gray"));
    } else {
      setRating(value);
      setColors((prevColors) =>
        prevColors.map((color, index) => (index < value ? "green" : "gray"))
      );
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="stars">
          {stars.map((star, index) => (
            <CiStar
              key={index}
              onClick={() => handleClick(index + 1)}
              style={{
                color: colors[index],
                fontSize: "30px",
                cursor: "pointer",
              }}
            />
          ))}

          <div>
            <h1>{`${rating} out of 5`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
