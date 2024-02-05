const Error = ({ children }) => {
  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase font-bold rounded-md mb-3 transition-all">
      {children}
    </div>
  );
};

export default Error;
