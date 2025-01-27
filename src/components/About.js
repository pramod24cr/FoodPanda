import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>

        {/* Logged In User Card */}
        {/* <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-md">
          <h2 className="text-lg font-semibold text-gray-600 mb-4">Logged In User</h2>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <p className="text-2xl font-bold text-blue-500">
                {loggedInUser || "Guest"}
              </p>
            )}
          </UserContext.Consumer>
        </div> */}

        {/* Series Info */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Welcome to the <span className="text-blue-500">Namaste React</span> Web Series!
        </h2>

        {/* User Class Component */}
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <UserClass name="First" location="Bengaluru Class" />
        </div>
      </div>
    );
  }
}

export default About;
    