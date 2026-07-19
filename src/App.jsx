import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <div className="h-screen bg-gray-300">
      <div className="h-full p-5 flex flex-col">
        <div className="mb-4">
          <Form />
        </div>

        <Table />

        <div className="mt-auto bg-white py-2 rounded-2xl shadow">
          <p className=" text-center font-medium ">Khang Nguyen</p>
        </div>
      </div>
    </div>
  );
}

export default App;
