const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {[...Array(18)].map((_, index) => (
        <div
          key={index}
          className="shimmer-card w-64 h-40 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
