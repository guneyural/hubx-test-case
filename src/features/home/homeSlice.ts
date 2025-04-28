import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CategoryItemType, HomeState, QuestionType } from "./types";
import axiosInstance from "../../axios";

const initialState: HomeState = {
  isLoading: false,
  error: null,
  questions: [],
  categories: [],
};

export const getQuestions = createAsyncThunk(
  "getQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/getQuestions`);
      let data = response.data;

      // Figmadaki text'ler ile api'den gelen textler aynı değildi
      // O yüzden aşağıdaki kod ile Figma'daki içerikle uyuşacak şekilde manuel düzenleme yaptım çünkü Figmadaki text ile api yanıtındaki textler aynı değildi.
      // Ayrıca daha kalın yazılması gereken kelimeleri ayırt edebilmemiz için ekstra bir array ekledim
      data = data.map((item: QuestionType) => {
        if (item.order === 1) {
          return {
            ...item,
            title: "How to identify plants easily with PlantApp?",
            boldText: "plants easily with PlantApp?",
          };
        } else if (item.order == 2) {
          return {
            ...item,
            title: "Species and varieties, what are the differences?",
            boldText: "Species and varieties,",
          };
        } else if (item.order == 3) {
          return {
            ...item,
            title: "The reasons why the same plant can look different",
            boldText: "The reasons why the same plant can",
          };
        }

        return item;
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

export const getCategories = createAsyncThunk(
  "getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/getCategories`);

      return response.data?.data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getQuestions.fulfilled,
        (state, action: PayloadAction<QuestionType[]>) => {
          state.isLoading = false;
          state.error = null;

          state.questions = action.payload;
        }
      )
      .addCase(getQuestions.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = {
          message: action.payload.data.message,
          status: action.payload.status,
        };
      });

    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<CategoryItemType[]>) => {
          state.isLoading = false;
          state.error = null;
          
          state.categories = action.payload;
        }
      )
      .addCase(getCategories.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = {
          message: action.payload.data.message,
          status: action.payload.status,
        };
      });
  },
});

export default homeSlice.reducer;
