import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError, handlesuccess } from "../../util";

export const signUpThunk = createAsyncThunk("auth/register", async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/register",
    data
  );
  console.log(response);
  return response.data;
});

// login thunk

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        data
      );
      console.log(response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("role", response.data.user.role);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Login failed");
    }
  }
);

// fetch recipe
export const fetchRecipe = createAsyncThunk(
  "/recipe",

  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/recipe");
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Login failed ");
    }
  }
);

export const createRecipe = createAsyncThunk(
  "recipes/createRecipe",
  async (recipeData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (let key in recipeData) {
        if (key === "image") {
          formData.append("image", recipeData.image);
        } else {
          formData.append(key, recipeData[key]);
        }
      }

      const response = await axios.post("api/recipes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization:`Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to create recipe"
      );
    }
  }
);

export const createRecipeThunk = createAsyncThunk(
  "recipe/create",
  async (formData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/recipe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to create recipe"
      );
    }
  }
);

// Get all cuisines
const API = "http://localhost:5000/api/cuisines";
export const fetchCuisines = createAsyncThunk(
  "cuisine/fetchCuisines",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/cuisines");
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to fetch cuisines"
      );
    }
  }
);

// ➕ Create new cuisine
export const addCuisine = createAsyncThunk(
  "cuisine/addCuisine",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cuisines",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to add cuisine"
      );
    }
  }
);

// update cuisine
export const updateCuisine = createAsyncThunk(
  "cuisine/updateCuisine",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/cuisines/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to update cuisine"
      );
    }
  }
);

// delete cuisine
export const deleteCuisine = createAsyncThunk(
  "cuisine/deleteCuisine",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/api/cuisines/${id}`);
      return id; // Return only ID to remove from Redux state
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Failed to delete cuisine"
      );
    }
  }
);

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  role: null,
  loading: false,
  error: null,
  successMessage: null,
  successLoginMessage: null,
  recipes: [],
  cuisines: [],
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      // state.role = action.payload.user.role; // 👈

      state.successLoginMessage = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
  localStorage.removeItem("role");
    },
  },
  extraReducers: (builder) => {
    builder
      // signup
      .addCase(signUpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || null;
        state.successMessage = action.payload.msg || "Registration successful";
        handlesuccess(state.successMessage || "Registration successful");
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
        handleError(state.error || "An error occurred");
      })

      // login
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || null;
        state.token = action.payload.token;
        state.successLoginMessage = action.payload.msg || "Login successful";
        handlesuccess(state.successLoginMessage || "Login successful");
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred during login";
        handleError(state.error || "An error occurred during login");
      })

      // ✅ fetchRecipe must also be INSIDE here
      .addCase(fetchRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
        handlesuccess("Recipe fetched successfully");
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch recipes";
        handleError(state.error);
      })

      // create Recipe
      .addCase(createRecipeThunk.pending, (state, action) => {
        state.loading = false;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(createRecipeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Recipe created successfully!";
        handlesuccess("Recipe created successfully!");

        if (state.recipes) {
          state.recipes.push(action.payload);
        } else {
          state.recipes = [action.payload];
        }
      })
      .addCase(createRecipeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create recipe";
        handlesuccess(action.payload || "Failed to created successfully!");
      });
  },
});

// cuisineslice
const cuisineSlice = createSlice({
  name: "cuisine",
  initialState,
  reducers: {
    resetCuisineState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchCuisines.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCuisines.fulfilled, (state, action) => {
        state.loading = false;
        state.cuisines = action.payload;
        handlesuccess("Cuisines fetched successfully!");
      })
      .addCase(fetchCuisines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        handleError(action.payload);
      })
      // Add
      .addCase(addCuisine.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addCuisine.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.cuisines.push(action.payload);
        handlesuccess("Cuisine added successfully!");
      })
      .addCase(addCuisine.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        handleError(action.payload);
      })
      // update cuisine
      .addCase(updateCuisine.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.cuisines.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index !== -1) {
          state.cuisines[index] = action.payload;
        }
        handlesuccess("Cuisine updated!");
      })

      // delete cuisine
      .addCase(deleteCuisine.fulfilled, (state, action) => {
        state.cuisines = state.cuisines.filter((c) => c._id !== action.payload);
        handlesuccess("Cuisine deleted!");
      });
  },
});

// Action creator are generated for each case reducer fun
// export const { increment, decrement, incrementNyAmount } = counterSlice.actions;

export const { logout } = counterSlice.actions;

export const { resetCuisineState } = cuisineSlice.actions;
export default counterSlice.reducer;
