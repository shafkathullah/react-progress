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
          </button>
          <button className="flex items-center px-4 py-1 border border-white rounded hover:bg-gray-700 ">
            <PauseIcon classes="w-5 h-5 mr-1" />
            <span>Pause</span>
          </button>
        </div>
        <button className="text-center border rounded px-4 py-1 mt-4 hover:bg-gray-700 ">
          <RefreshIcon classes="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;
