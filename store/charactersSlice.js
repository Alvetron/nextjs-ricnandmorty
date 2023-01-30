import { api } from "@/assets/api";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    currentPage: 1,
    likedCharIds: [],
    value: undefined,
    isFetched: true,
}

export const charactersSlice =  createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharByBtn: (state, {payload}) => {
            const {characters, isNext} = payload;

            isNext ? state.currentPage += 1 : state.currentPage -= 1;
            state.value = [...characters]
        },
        setCharByNum: (state, {payload}) => {
            const {characters, expectedPage} = payload;
            state.currentPage = expectedPage;
            state.value = [...characters]
        },
        setLikeCharIds: (state, {payload}) => {
            state.likedCharIds = [...state.likedCharIds, payload.id];
        },
        delLikeCharId: (state, {payload}) => {
            const index = state.likedCharIds.indexOf(payload);
            state.likedCharIds.splice(index, 1);
        },
    }

})

export const { setCharByBtn, setCharByNum, setLikeCharIds, delLikeCharId } = charactersSlice.actions

export const getCharByBtnAsync =  ({currentPage, isNext}) =>  async(dispatch) => {
    const expectedPage = isNext ? currentPage + 1 : currentPage - 1; 
    const characters = await api.getCharacters(expectedPage);

    dispatch(setCharByBtn({characters, isNext}));
} 

export const getCharByNumAsync =  (expectedPage) =>  async(dispatch) => {
    const characters = await api.getCharacters(expectedPage);

    dispatch(setCharByNum({characters, expectedPage}));
} 

export const selectCharacters = state => state.characters.value;
export const selectCurrentPage = state => state.characters.currentPage;
export const selectLikedCharIds = state => state.characters.likedCharIds;
 
export default charactersSlice.reducer;