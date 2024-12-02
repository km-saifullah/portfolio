const Button = ({ title }) => {
  return (
    <button className="rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 hover:bg-gradient-to-bl focus:outline-none focus:shadow-outline text-base font-normal font-sora">
      {title}
    </button>
  );
};

export default Button;
