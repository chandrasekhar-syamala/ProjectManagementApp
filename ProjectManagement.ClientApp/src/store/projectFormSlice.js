import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  editingProjectId: null,
  isFormOpen: false,
};

const projectFormSlice = createSlice({
  name: "projectForm",
  initialState,
  reducers: {
    openAddForm(state) {
      state.name = "";
      state.description = "";
      state.editingProjectId = null;
      state.isFormOpen = true;
    },
    openEditForm(state, action) {
      const { id, name, description } = action.payload;
      state.name = name;
      state.description = description;
      state.editingProjectId = id;
      state.isFormOpen = true;
    },
    closeForm(state) {
      state.isFormOpen = false;
      state.name = "";
      state.description = "";
      state.editingProjectId = null;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
    updateDescription(state, action) {
      state.description = action.payload;
    },
  },
});

export const {
  openAddForm,
  openEditForm,
  closeForm,
  updateName,
  updateDescription,
} = projectFormSlice.actions;

export default projectFormSlice.reducer;
