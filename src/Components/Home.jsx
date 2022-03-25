import React from "react";
import MyComponent from "../icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>AJ Blog</h1>

      <h2>Netflix,Hotstar,Prime mods available are here.......</h2>

      <div className="cards">
        <div className="card">
          <p>Hotstar</p>
          <ul>
            <li className="List-flex">
              <MyComponent />
              Vip Subscription
            </li>
            <li className="List-flex">
              <MyComponent />
              Unlimited Device
            </li>
            <li className="List-flex">
              <MyComponent />
              One month
            </li>
            <li className="List-flex">
              <MyComponent />
              Just for 30rs
            </li>
            <li className="List-flex">
              <MyComponent />
              Private mods also available V/A: Until your plan{" "}
            </li>
          </ul>
        </div>
        <div className="card">
          <p>Netflix</p>
          <ul>
            <li className="List-flex">
              <MyComponent />
              Vip Subscription
            </li>
            <li className="List-flex">
              <MyComponent />
              Unlimited Device
            </li>
            <li className="List-flex">
              <MyComponent />
              One month
            </li>
            <li className="List-flex">
              <MyComponent />
              Just for 30rs
            </li>
            <li className="List-flex">
              <MyComponent />
              Private mods also available V/A: Until your plan{" "}
            </li>
          </ul>
        </div>
        <div className="card">
          <p>Prime</p>
          <ul>
            <li className="List-flex">
              <MyComponent />
              Vip Subscription
            </li>
            <li className="List-flex">
              <MyComponent />
              Unlimited Device
            </li>
            <li className="List-flex">
              <MyComponent />
              0ne month
            </li>
            <li className="List-flex">
              <MyComponent />
              Just for 30rs
            </li>
            <li className="List-flex">
              <MyComponent />
              Private mods also available V/A: Until your plan{" "}
            </li>
          </ul>
        </div>
      </div>
      <span>
        Get a Free Trail <Link to="/Trail1">Click Here</Link>
      </span>
      <p>
        To get your mod <Link to="#"> Telegram</Link>
      </p>
    </div>
  );
}

export default Home;
