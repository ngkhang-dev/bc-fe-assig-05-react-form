import Button from "./Button";

const formFields = [
  {
    id: "maSV",
    name: "maSV",
    label: "Mã SV",
    placeholder: "2",
    type: "text",
  },
  {
    id: "hoTen",
    name: "hoTen",
    label: "Họ tên",
    placeholder: "Nguyễn Văn B",
    type: "text",
  },
  {
    id: "soDienThoai",
    name: "soDienThoai",
    label: "Số điện thoại",
    placeholder: "0123456789",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "nguyenvanb@gmail.com",
    type: "text",
  },
];

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* Title */}
      <div className="text-white bg-gray-700 px-3 py-4">
        <h2 className="text-lg font-bold">Thông tin sinh viên</h2>
      </div>

      {/* Form */}
      <div className="bg-neutral-primary-soft p-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Fields */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4  mb-4">
            {formFields.map((field) => {
              return (
                <div key={field.id} className="">
                  <label
                    htmlFor={field.name}
                    className="block mb-2.5 text-sm font-medium text-heading"
                  >
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    id={field.id}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    placeholder={field.placeholder}
                  />
                </div>
              );
            })}
          </div>

          {/* Button */}
          <Button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-600 focus:ring-green-600"
          >
            Thêm sinh viên
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
