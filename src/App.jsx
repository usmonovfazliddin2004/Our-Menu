import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(false);
  const [count1, setCount1] = useState(false);
  const [count2, setCount2] = useState(false);
  const [count3, setCount3] = useState(false);
  const [count4, setCount4] = useState(false);

  const isClick = () => {
    setCount(true);
    setCount1(true);
    setCount2(true);
    setCount3(true);
    setCount4(true);
  };

  const isClick1 = () => {
    setCount(false);
    setCount1(true);
    setCount2(false);
    setCount3(false);
    setCount4(false);
  };

  const isClick2 = () => {
    setCount(false);
    setCount1(false);
    setCount2(true);
    setCount3(false);
    setCount4(false);
  };

  const isClick3 = () => {
    setCount(false);
    setCount1(false);
    setCount2(false);
    setCount3(true);
    setCount4(false);
  };

  const isClick4 = () => {
    setCount(false);
    setCount1(false);
    setCount2(false);
    setCount3(false);
    setCount4(true);
  };

  const block = {
    display: count ? "initial" : "initial",
  };
  const natija = {
    display: count1 ? "flex" : "none",
  };
  const natija1 = {
    display: count2 ? "flex" : "none",
  };
  const natija2 = {
    display: count3 ? "flex" : "none",
  };
  const natija3 = {
    display: count4 ? "flex" : "none",
  };

  return (
    <div className="wrapper" style={block}>
      <h1 className="Our">Our Menu</h1>
      <div className="buttons">
        <button onClick={isClick}>All</button>
        <button onClick={isClick1}>Breakfast</button>
        <button onClick={isClick2}>Lunch</button>
        <button onClick={isClick3}>Shakes</button>
        <button onClick={isClick4}>Dinner</button>
      </div>
      <div className="breakfast" style={natija}>
        <div>
          <div>
            <img src="./src/images/breakfast-1.jpg" alt="" />
          </div>
          <div>
            <span className="food">Buttermilk Pancakes </span>
            <span className="money">
              {" "}
              <b>$ 15.99</b>
            </span>
            <hr />
            <p className="word">
              Buttermilk is a fermented dairy drink. Traditionally, it was the
              liquid left behind after churning butter out of cultured cream.
            </p>
          </div>
        </div>
        <div className="box1">
          <div>
            <img src="./src/images/breakfast-2.jpg" alt="" />
          </div>
          <div>
            <span className="food" style={{ marginLeft: "-75px" }}>
              Dinner Double{" "}
            </span>
            <span className="money">
              {" "}
              <b>$ 13.99</b>
            </span>
            <hr />
            <p className="word">
              Dinner usually refers to what is in many Western cultures the
              biggest and most formal meal of the day. Historically, the largest
              meal used to be eaten around midday.
            </p>
          </div>
        </div>
      </div>

      <div className="breakfast" style={natija1}>
        <div>
          <div>
            <img src="./src/images/lunch-1.webp" alt="" />
          </div>
          <div>
            <span className="food" style={{ marginLeft: "-50px" }}>
              Godzilla Milkshake{" "}
            </span>
            <span className="money">
              {" "}
              <b>$ 6.99</b>
            </span>
            <hr />
            <p className="word">
              Godzilla (Japanese: ゴジラ, Hepburn: Gojira, /ɡɒdˈzɪlə/;
              [ɡoꜜ(d)ʑiɾa] ⓘ) is a fictional monster, or kaiju, that debuted in
              the eponymous 1954 film.
            </p>
          </div>
        </div>
        <div className="box1">
          <div>
            <img src="./src/images/lunch-2.jpg" alt="" />
          </div>
          <div>
            <span className="food" style={{ marginLeft: "-70px" }}>
              Country delight{" "}
            </span>
            <span className="money">
              {" "}
              <b>$ 20.99</b>
            </span>
            <hr />
            <p className="word">
              Country Delight is a direct-to-home consumer brand in India,
              specializing in delivering natural food essentials directly to
              consumers' doorsteps.
            </p>
          </div>
        </div>
      </div>

      <div className="breakfast" style={natija2}>
        <div>
          <div>
            <img src="./src/images/shakes-1.jpeg" alt="" />
          </div>
          <div>
            <span className="food" style={{ marginLeft: "-50px" }}>
              Shakes Milkshake{" "}
            </span>
            <span className="money">
              {" "}
              <b>$ 17.09</b>
            </span>
            <hr />
            <p className="word">
              A milkshake (sometimes simply called a shake) is a sweet beverage
              made by blending milk, ice cream, and flavorings or sweeteners
              such as
            </p>
          </div>
        </div>
        <div className="box1">
          <div>
            <img src="./src/images/shakes-2.avif" alt="" />
          </div>
          <div>
            <span className="food" style={{ marginLeft: "-70px" }}>
              Shakes delight{" "}
            </span>
            <span className="money">
              {" "}
              <b>$ 10.99</b>
            </span>
            <hr />
            <p className="word">
              Milkshakes originated in the United States around the turn of the
              20th century, and grew in popularity following the introduction of
              electric blenders
            </p>
          </div>
        </div>
      </div>
      <div className="breakfast" style={natija3}>
        <div>
          <div>
            <img src="./src/images/dinner-1.jpg" alt="" />
          </div>
          <div>
            <span className="food" style={{ marginLeft: "-50px" }}>
              Dinner Milkshake{" "}
            </span>
            <span className="money">
              {" "}
              <b>$ 50.21</b>
            </span>
            <hr />
            <p className="word">
              A milkshake (sometimes simply called a shake) is a sweet beverage
              made by blending milk, ice cream, and flavorings or sweeteners
              such as
            </p>
          </div>
        </div>
        <div className="box1">
          <div>
            <img src="./src/images/dinner-2.jpg" alt="" />
          </div>
          <div>
            <span className="food" style={{ marginLeft: "-75px" }}>
              Dinner delight{" "}
            </span>
            <span className="money">
              {" "}
              <b>$ 13.56</b>
            </span>
            <hr />
            <p className="word">
              Milkshakes originated in the United States around the turn of the
              20th century, and grew in popularity following the introduction of
              electric blenders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
