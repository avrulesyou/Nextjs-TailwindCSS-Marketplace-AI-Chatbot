import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type UserType = {
  createdAt: number;
  defaultWallet: string;
  email: string;
  id: string;
  name: string;
  profileId: string;
  profilePicture: string;
  provider: string;
  token: string;
  updatedAt: number;
  username: string;
  xummToken: string;
  balance: string;
};

type InitialStateType = {
  entities: {
    data: UserType;
    status: string;
  };
};

const initialState = {
  entities: {},
} as InitialStateType;

export const getUserData = createAsyncThunk(
  "user/fetchUser",
  async (ThunkAPI) => {
    try {
      const res = await fetch("https://api.phoenixrp.io/v1/auth/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json());
      return res;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.entities = { ...state.entities, ...action.payload };
    });
  },
});

export default userSlice.reducer;
