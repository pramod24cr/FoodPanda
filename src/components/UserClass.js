import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.github.com/users/pramod24cr");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      this.setState({
        userInfo: json,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({
        error: "Failed to fetch user data. Please try again later.",
        loading: false,
      });
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { loading, error } = this.state;

    return (
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-dotted rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Loading user data...</p>
          </div>
        ) : error ? (
          <div className="text-red-500 font-medium">{error}</div>
        ) : (
          <>
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src={avatar_url}
              alt={`${name}'s avatar`}
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Name: {name}</h2>
            <h3 className="text-lg text-gray-600 mb-2">Location: {location}</h3>
            <h4 className="text-sm text-blue-600">
              Contact: <a href="mailto:pramod24cr@gmail.com">pramod24cr@gmail.com</a>
            </h4>
          </>
        )}
      </div>
    );
  }
}

export default UserClass;



/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */