import Form from "./components/Form";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";

function App() {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="h-full p-5 flex flex-col">
        <div className="mb-4 flex justify-end">
          <SearchBox />
        </div>

        <div className="mb-4">
          <Form />
        </div>

        <div className="mb-5">
          <Table />
        </div>

        <div className="mt-auto bg-white py-2 rounded-2xl shadow">
          <p className=" text-center font-medium ">Khang Nguyen</p>
        </div>
      </div>
    </div>
  );
}

export default App;
