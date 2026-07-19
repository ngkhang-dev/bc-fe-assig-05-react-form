import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { searchByKeyword } from "../store/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(keyword);
    dispatch(searchByKeyword(keyword));
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
  };

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label
        htmlFor="search"
        className="block mb-2.5 text-sm font-medium text-heading sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-body"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          name="search"
          className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          placeholder="Search..."
          onChange={(e) => handleOnChange(e)}
        />

        <Button
          type="submit"
          className="btn absolute inset-e-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong focus:ring-brand-medium rounded text-xs px-3 py-1.5"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBox;
