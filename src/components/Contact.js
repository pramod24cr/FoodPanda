const Contact = () => {
  return (
    <div className="flex justify-center items-start bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
        <h1 className="font-bold text-3xl text-center mb-6">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
          />
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Message"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
