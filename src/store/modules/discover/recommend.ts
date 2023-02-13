import { getTopBanner } from '@/service/api/discover/recommend'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  banners: any[]
}

const initialState: IInitialState = {
  banners: []
}

export const fetchBannerData = createAsyncThunk(
  'recommend-banner',
  async (args, { dispatch }) => {
    const res = await getTopBanner()
    dispatch(changeBannerAction(res.banners))
  }
)

const recommendReducer = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBannerAction } = recommendReducer.actions

export default recommendReducer.reducer
