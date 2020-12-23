function Chart() {
  const arr = [...Array(50).keys()];

  return (
    <div className="flex mx-14 my-16 overflow-x-scroll">
      {arr.map((num) => {
        const rand = Math.floor(Math.random() * 9) + 1;
        return (
          <div>
            <div className="relative w-4 h-72 mr-3.5 mb-3.5">
              <div
                className="absolute w-full bottom-0 bg-blue-500"
                style={{ height: rand * 30 }}
              ></div>
            </div>
            <p className="text-gray-400">{num}</p>
            <p className="text-gray-400">{rand}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Chart;
