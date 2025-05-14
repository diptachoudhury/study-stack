import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course, CartItem, CourseState } from "./courseTypes";

const initialState: CourseState = {
  currentCourse: null,
  cart: [],
  isPreviewModalOpen: false,
  currentPreviewVideo: null,
  reviewsPage: 1,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse(state, action: PayloadAction<Course>) {
      state.currentCourse = action.payload;
    },

    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.cart.find(
        (item) => item.courseId == action.payload.courseId
      );
      if (!existingItem) {
        state.cart.push(action.payload);
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.courseId != action.payload);
    },

    openPreviewModal(state, action: PayloadAction<{courseId: string, videoId: string}>) {
      state.isPreviewModalOpen = true;
      state.currentPreviewVideo = action.payload.videoId;
    },

    closePreviewModal(state) {
      state.isPreviewModalOpen = false;
      state.currentPreviewVideo = null;
    },

    setReviewsPage(state, action: PayloadAction<number>) {
      state.reviewsPage = action.payload;
    },
  },
});


export const { 
    setCourse,
  addToCart,
  removeFromCart,
  openPreviewModal,
  closePreviewModal,
  setReviewsPage,
} = courseSlice.actions;

export default courseSlice.reducer;
