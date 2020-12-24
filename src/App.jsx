import { RefreshIcon, PlayIcon, PauseIcon } from "./icons/index";
import CircularProgress from "./components/CircularProgress";

function App() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <CircularProgress />
        <div className="flex justify-center">
          <button className="flex items-center px-4 py-1 mr-4 border border-white rounded hover:bg-gray-700 ">
            <PlayIcon classes="w-5 h-5 mr-1" />
            <span>Start</span>
            {/* <PauseIcon classes="w-5 h-5 mr-1" />
            <span>Pause</span> */}
          </button>
          <button className="flex items-center px-4 py-1 border border-white rounded hover:bg-gray-700 ">
            <RefreshIcon classes="w-5 h-5 mr-1" />
            <span>Refresh</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
