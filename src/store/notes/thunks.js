import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { activeNotes, addingUrlsToNotes, deleteNote, refreshNotes, setNewNote, setNotes } from "./notesSlice";
import { loadNotes } from "../../helpers/loadNotes";
import Swal from 'sweetalert2'
import { uploadFiles } from "../../helpers/uploadFile";


export const startNewNote = ()=>{

    return async( dispatch, getState )=>{
        
        const { uid } = getState().auth
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            urls: []
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch( activeNotes(newNote) )
    }
};

export const startLoadingNotes = (uid)=>{
    return async( dispatch ) =>{
        const notes = await loadNotes(uid);
        dispatch( setNotes(notes) );
    }
}

export const startSaveNotes = (note)=>{
    return async(dispatch, getState)=>{

        const {uid} = getState().auth;
        const {notes} = getState().notes

        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        if (!noteToFirestore.urls) {
            delete noteToFirestore.urls; 
            
        }

        await updateDoc(doc(FirebaseDB, `${uid}/journal/notes/${note.id}`), noteToFirestore); 
        dispatch(refreshNotes({...note}))
        
        const isThisANewNote = !notes.find( noteInNotes => noteInNotes.id === note.id  )
        if (isThisANewNote) {
            
            dispatch( setNewNote(note) )

        }

        Swal.fire({
            position: "center",
            icon: "success",
            title: "La nota ha sido guardada correctamente",
            showConfirmButton: false,
            timer: 1500
          });
        
    }
};

export const startUploadingImage = ( files=[] )=>{
    return async(dispatch, getState)=>{
        
        
        Swal.fire({
            title: 'Subiendo imágenes...',
            text: 'Por favor, espere...',
            allowOutsideClick: false,
            
        })
        Swal.showLoading();
        
        const urlsArray = [];
        
        
        
        for( const file of files ){
            const fileUrl = await uploadFiles( file );
            urlsArray.push(fileUrl);
        };
        
        
        dispatch(addingUrlsToNotes(urlsArray))
        const {active: activeNote} = getState().notes
        // console.log(activeNote)
        dispatch( startSaveNotes(activeNote) );
        
        Swal.close();

       

    }
};

export const startDelete = (note)=>{

    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        await deleteDoc( doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`))
        
        dispatch( deleteNote( note ) );

    }

}