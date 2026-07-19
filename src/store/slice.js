import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listStudents: [
    {
      maSV: "1",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "01234567891",
      email: "nguyenvana@gmail.com",
    },
    {
      maSV: "2",
      hoTen: "Nguyễn Văn B",
      soDienThoai: "01215648965",
      email: "nguyenvanb@gmail.com",
    },
  ],
  studentEdit: null,
  mode: "add",
  searchStudents: null,
};

const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {
    addStudent: (state, { payload }) => {
      state.listStudents = [...state.listStudents, payload];
    },
    delStudent: (state, { payload }) => {
      state.listStudents = state.listStudents.filter(
        (user) => user.maSV !== payload,
      );
    },
    editStudent: (state, { payload }) => {
      state.studentEdit = state.listStudents.find(
        (stu) => stu.maSV === payload,
      );
      state.mode = "edit";
    },
    updateStudent: (state, { payload }) => {
      const indexExisting = state.listStudents.findIndex(
        (student) => student.maSV === payload.maSV,
      );

      if (indexExisting !== -1) state.listStudents[indexExisting] = payload;

      state.studentEdit = null;
      state.mode = "add";
    },
    searchByKeyword: (state, { payload }) => {
      const keyword = payload.trim().toLowerCase();
      console.log(keyword);
      state.searchStudents = state.listStudents.filter((student) => {
        return (
          student.email.toLowerCase().includes(keyword) ||
          student.hoTen.toLowerCase().includes(keyword) ||
          student.soDienThoai.includes(keyword) ||
          student.maSV.toLowerCase().includes(keyword)
        );
      });
    },
  },
});

export const {
  addStudent,
  delStudent,
  editStudent,
  updateStudent,
  searchByKeyword,
} = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
