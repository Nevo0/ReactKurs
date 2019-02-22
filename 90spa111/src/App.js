import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Start</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
