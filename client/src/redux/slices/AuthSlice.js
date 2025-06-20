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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Login failed");
    }
  }
);



// fetch recipe
export const fetchRecipe = createAsyncThunk(
    "/recipe",
    
    async( _ , { rejectWithValue }) =>{
        try {
            const response = await axios.get(
                "http://localhost:5000/api/recipe"
            );
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
        headers: { "Content-Type": "multipart/form-data",
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
  async(formData,{rejectWithValue}) =>{
try{
    const token = localStorage.getItem("token");
const response = await axios.post(
  "http://localhost:8000/api/recipe",
  formData, 
  {
    headers:{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  }
);
console.log(response);
return response.data;
  }catch(err){
return rejectWithValue(err.response?.data?.error  || "Failed to create recipe");
  }
  }
  )

////////////////////////////


// // redux/slices/AuthSlice.js (or separate recipeSlice.js)

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const createRecipe = createAsyncThunk(
//   "recipe/createRecipe",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:8000/api/recipes",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       // return error message
//       return rejectWithValue(
//         error.response?.data?.message || error.message || "Failed to create recipe"
//       );
//     }
//   }
// );

// const recipeSlice = createSlice({
//   name: "recipe",
//   initialState: {
//     recipes: [],
//     loading: false,
//     error: null,
//     success: false,
//   },
//   reducers: {
//     reset: (state) => {
//       state.loading = false;
//       state.error = null;
//       state.success = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createRecipe.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(createRecipe.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.recipes.push(action.payload.recipe);
//       })
//       .addCase(createRecipe.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });


///////////////////////////
// const recipeSlice = createSlice({
//   name: "recipe",
//   initialState: {
//     recipes: [],
//     loading: false,
//     error: null,
//     success: false,
//   },
//   reducers: {
//     reset: (state) => {
//       state.loading = false;
//       state.error = null;
//       state.success = false;
//     },
//   }, 

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  successMessage: null,
  successLoginMessage: null,
  recipes: []
};

export const counterSlice = createSlice({
  name: "auth",
initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.successLoginMessage = null;
      localStorage.removeItem("token");
      
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
        handlesuccess(state.successMessage|| "Registration successful");
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
      .addCase(createRecipeThunk.pending, (state,action) =>{
        state.loading = false;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(createRecipeThunk.fulfilled, (state,action) =>{
        state.loading =false;
        state.successMessage ="Recipe created successfully!";
        handlesuccess("Recipe created successfully!");

        if(state.recipes){
          state.recipes.push(action.payload);
        }else{
          state.recipes =[action.payload];
        }
      })
      .addCase(createRecipeThunk.rejected, (state,action) =>{
        state.loading =false;
        state.error =action.payload || "Failed to create recipe";
        handlesuccess(action.payload || "Failed to created successfully!");
      })
 
      },
});

  

// Action creator are generated for each case reducer fun

// export const { increment, decrement, incrementNyAmount } = counterSlice.actions;

export const { logout } = counterSlice.actions;

export default counterSlice.reducer;


// export const { reset } = recipeSlice.actions;
