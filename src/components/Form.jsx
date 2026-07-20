import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../store/slice";
import { useSelector } from "react-redux";

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

const initialData = {
  maSV: "",
  hoTen: "",
  email: "",
  soDienThoai: "",
};

const initialErrors = {
  maSV: "",
  hoTen: "",
  email: "",
  soDienThoai: "",
};

const validateField = (name, value, { mode, listStudents } = {}) => {
  if (!value || value.trim() === "") return "Vui lòng không bỏ trống";

  const studentExisting = listStudents?.some(
    (student) => student.maSV === value.trim(),
  );

  if (name === "maSV" && mode === "add" && studentExisting) {
    return "Mã SV đã tồn tại";
  }

  if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
    return "Email không hợp lệ";
  }

  if (name === "soDienThoai" && !/^\d{9,11}$/.test(value)) {
    return "Số điện thoại không hợp lệ";
  }

  return "";
};

const validateAll = (data, context) => {
  const nextErrors = {};
  Object.keys(initialData).forEach((name) => {
    nextErrors[name] = validateField(name, data[name], context);
  });
  return nextErrors;
};

const Form = () => {
  const dispatch = useDispatch();

  const { studentEdit, mode, listStudents } = useSelector(
    (state) => state.studentReducer,
  );

  const [userInfo, setUserInfo] = useState(initialData);
  const [errors, setErrors] = useState(initialErrors);
  const [prevStudentEdit, setPrevStudentEdit] = useState(studentEdit);

  if (prevStudentEdit !== studentEdit) {
    setPrevStudentEdit(studentEdit);
    setUserInfo(studentEdit ?? initialData);
    setErrors(initialErrors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = validateAll(userInfo, { mode, listStudents });
    setErrors(nextErrors);

    const hasError = Object.values(nextErrors).some((err) => err);
    if (hasError) return;

    if (studentEdit) dispatch(updateStudent(userInfo));
    else dispatch(addStudent(userInfo));

    setUserInfo(initialData);
    setErrors(initialErrors);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value, { mode, listStudents }),
    }));
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value, { mode, listStudents }),
    }));
  };

  const isFormValid =
    Object.values(userInfo).every((val) => val && val.trim() !== "") &&
    Object.values(errors).every((err) => !err);

  return (
    <div>
      {/* Title */}
      <div className="text-white bg-gray-700 px-3 py-4">
        <h2 className="text-lg font-bold">Thông tin sinh viên</h2>
      </div>

      {/* Form */}
      <div className="bg-neutral-primary-soft p-4">
        <form onSubmit={handleSubmit}>
          {/* Fields */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4  mb-4">
            {formFields.map((field) => {
              return (
                <div key={field.id} className="">
                  <label
                    htmlFor={field.name}
                    className={`block mb-2.5 text-sm font-medium ${errors[field.name] ? "text-fg-danger-strong" : "text-heading"}`}
                  >
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    value={userInfo[field.name]}
                    disabled={
                      mode === "edit" && field.name === "maSV" ? true : false
                    }
                    className={`border text-sm rounded-base block w-full px-3 py-2.5 shadow-xs ${errors && errors[field.name] ? "bg-danger-soft border-danger-subtle text-fg-danger-strong focus:ring-danger focus:border-danger placeholder:text-fg-danger-strong" : "bg-neutral-secondary-medium border-default-medium text-heading focus:ring-brand focus:border-brand placeholder:text-body"}`}
                    placeholder={field.placeholder}
                    onChange={(e) => handleOnChange(e)}
                    onBlur={(e) => handleValidation(e)}
                  />

                  {errors && errors[field.name] && (
                    <p className="mt-2.5 text-sm text-fg-danger-strong">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Button */}
          <Button
            type="submit"
            className={`text-white ${isFormValid ? "bg-green-600 hover:bg-green-700 focus:ring-green-600" : "bg-gray-400"}`}
            disabled={!isFormValid}
          >
            {mode === "add" ? "Thêm sinh viên" : "Cập nhật thông tin"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
