import { Component } from "react";
import GuestGreeting from "./GuestGreeting";
import AdminGreeting from "./AdminGreeting";
import Login from "./Login";
import Logout from "./Logout";

export default class Conditional extends Component {
  state = {
    isLoggedIn: false,
  };

  handleAuthentication = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));

    console.log(this.state.isLoggedIn);
  };

  render() {
    const conditionalClass = `flex justify-around gap-4 p-12`;

    return this.state.isLoggedIn ? (
      <section className={conditionalClass}>
        <AdminGreeting />
        <Logout Logout={this.handleAuthentication} />
      </section>
    ) : (
      <section className={conditionalClass}>
        <GuestGreeting />
        <Login Login={this.handleAuthentication} />
      </section>
    );
  }
}
