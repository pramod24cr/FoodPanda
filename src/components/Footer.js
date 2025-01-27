import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </h3>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
