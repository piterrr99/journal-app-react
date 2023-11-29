import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        active: null
    },
    reducers: {
        activeNotes: (state, {payload} ) =>{
            state.active = payload
        },
        addingUrlsToNotes: (state, {payload=[]}) =>{
            
            for( const element of payload ){
                state.active.urls.push(element);
            }
            
        },
        deleteNote: (state, {payload})=>{
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== payload.id )
        },
        logoutNotes: (state)=>{
            state.active = null;
            state.notes = [];
        },
        refreshNotes: (state, {payload})=>{
            
            state.notes = state.notes.map(note=>(
                (note.id === payload.id )
                ? {...payload}
                : note
            ))
        },
        setNewNote: (state, {payload})=>{

            state.notes.push(payload)

        },
        setNotes: (state, {payload})=>{
            state.notes = [...payload]
        },
        }
});


export const { activeNotes, addingUrlsToNotes, deleteNote, logoutNotes, setNewNote, setNotes, refreshNotes } = notesSlice.actions;
export default notesSlice.reducer