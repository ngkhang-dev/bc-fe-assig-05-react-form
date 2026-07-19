import Button from "./Button";

const initialData = [
  {
    id: 1,
    hoTen: "Nguyễn Văn A",
    soDienThoai: "093811111111",
    email: "nguyenvana@gmail.com",
  },
  {
    id: 2,
    hoTen: "Nguyễn Văn B",
    soDienThoai: "093823232323",
    email: "nguyenvanb@gmail.com",
  },
];

const theads = [
  {
    id: "maSV",
    label: "Mã SV",
  },
  {
    id: "hoTen",
    label: "Họ tên",
  },
  {
    id: "soDienThoai",
    label: "Số điện thoại",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "action",
    label: "",
  },
];

const Table = () => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-white bg-gray-700 border-b border-default-medium">
          <tr>
            {theads.map((field) => {
              return (
                <th
                  key={field.id}
                  scope="col"
                  className="px-6 py-3 font-medium"
                >
                  {field.label}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {initialData.map((user) => {
            return (
              <tr
                key={user.id}
                className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
              >
                <td className="px-6 py-4">{user.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  {user.hoTen}
                </th>
                <td className="px-6 py-4">{user.soDienThoai}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4 flex gap-x-2">
                  <Button
                    type="button"
                    className="text-white bg-brand hover:bg-brand-strong focus:ring-brand-medium"
                  >
                    Edit
                  </Button>

                  <Button
                    type="button"
                    className="text-white bg-danger hover:bg-danger-strong focus:ring-danger-medium"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
