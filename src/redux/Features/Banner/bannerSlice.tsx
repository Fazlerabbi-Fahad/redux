import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IItems {
    item: number
}


const initialState: IItems = {
    item: 1
}

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        nextBanner: (state = initialState, action: PayloadAction<IItems>) => {
            switch (action.type) {
                case 'CHANGE_SLIDE':
                    return {
                        ...state,
                        currentSlide: action.payload,
                    };
                default:
                    return state;
            }
        }
    }
})





export const { nextBanner } = bannerSlice.actions;

export default bannerSlice.reducer;