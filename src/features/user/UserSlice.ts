import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/context/store';

// Define a type for the slice state
interface IUser {
  isLoggedIn: boolean;
  firstName?: string | undefined;
}

// Define the initial state using that type
const initialState: IUser = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.firstName = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.firstName = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export function selectUser(state: RootState): IUser {
  return state.user;
}
export function selectFirstName(state: RootState): string | undefined {
  return state.user.firstName;
}
export function selectIsLoggedIn(state: RootState): boolean {
  return state.user.isLoggedIn;
}

export const userReducer = userSlice.reducer;
