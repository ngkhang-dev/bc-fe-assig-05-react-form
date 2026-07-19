import { useSelector } from "react-redux";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { delStudent, editStudent } from "../store/slice";

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
  const { listStudents, searchStudents } = useSelector(
    (state) => state.studentReducer,
  );
  const displayList = searchStudents ?? listStudents;

  const dispatch = useDispatch();

  const handleDel = (maSV) => {
    dispatch(delStudent(maSV));
  };

  const handleEdit = (maSV) => {
    dispatch(editStudent(maSV));
  };

  return (
    <>
      {displayList.length === 0 ? (
        <p>
          {searchStudents !== null
            ? "Không tìm thấy sinh viên phù hợp"
            : "Danh sách trống"}
        </p>
      ) : (
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
              {listStudents?.map((student) => {
                return (
                  <tr
                    key={student.maSV}
                    className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                  >
                    <td className="px-6 py-4">{student.maSV}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      {student.hoTen}
                    </th>
                    <td className="px-6 py-4">{student.soDienThoai}</td>
                    <td className="px-6 py-4">{student.email}</td>
                    <td className="px-6 py-4 flex gap-x-2">
                      <Button
                        type="button"
                        className="text-white bg-brand hover:bg-brand-strong focus:ring-brand-medium"
                        onClick={() => handleEdit(student.maSV)}
                      >
                        Sửa
                      </Button>

                      <Button
                        type="button"
                        className="text-white bg-danger hover:bg-danger-strong focus:ring-danger-medium"
                        onClick={() => handleDel(student.maSV)}
                      >
                        Xóa
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
