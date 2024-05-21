import "./App.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const App = () => {
  const allCookies = Cookies.get(); 
  const cookiesArray = Object.entries(allCookies);
  const [count, setCount] = useState(0); 
  const [token, setToken] = useState({ name: "", value: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setToken((prevToken) => {
      return {
        ...prevToken,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    setCount((prevCount) => prevCount + 1); 
    Cookies.set(token.name, token.value); 
    setToken((prevToken) => {
      return {
        ...prevToken,
        name: "",
        value: "",
      };
    });
  };

  const handleDelete = (name) => {
    setCount((prevCount) => prevCount + 1);
    Cookies.remove(name); 
  };
  useEffect(() => {}, [count]); 
  return (
    <div className="main">
      <div className="title">
        <img src="/bts.png" alt="cookies" />
        <span>Key's Cookies</span>
      </div>
      <div className="content">
        <div className="cookies">
          <span>Your Cookies</span>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {cookiesArray.length > 0 &&
                cookiesArray.map((cookie, index) => (
                  <tr key={index}>
                    <td>{cookie[0]}</td>
                    <td>{cookie[1]}</td>
                    <td>
                      <button onClick={() => handleDelete(cookie[0])}>
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="actions">
          <div>
            <span>Name:</span>
            <input
              name="name"
              value={token.name}
              onChange={handleChange}
              type="text"
              placeholder="Required.."
            />
          </div>
          <div>
            <span>Value:</span>
            <input
              name="value"
              value={token.value}
              onChange={handleChange}
              type="text"
              placeholder="Required.."
            />
          </div>
          <button disabled={!token.name || !token.value} onClick={handleSubmit}>
            <span>Submit</span>
          </button>
        </div>
      </div>
      <div className="footer">
        <a href="https://youtu.be/XGReA08vjN0?si=Zwgok2MTWHn3nzW6">BTS Made Cookies</a>
      </div>
    </div>
  );
};

export default App; 