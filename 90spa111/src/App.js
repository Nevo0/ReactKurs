import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";

const Home = () => <h1>Strona Home</h1>;
const News = () => <h1>Strona News</h1>;
const Contact = () => <h1>Strona Contact</h1>;

const ErrorPage = () => <h1>Strona nie istnieje</h1>;

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
                  <NavLink
                    to="/"
                    exact
                    activeClassName="home_selected"
                    activeStyle={{
                      backgroundColor: "gray",
                      letterSpacing: "6px"
                    }}
                  >
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="news_selected">
                    Aktualności
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="contact_selected">
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
