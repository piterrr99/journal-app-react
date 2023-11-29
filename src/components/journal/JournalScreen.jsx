
import { ThemeProvider } from '@emotion/react'
import React from 'react'

import { journalTheme } from '../../theme/journalTheme'
import { NotesScreen } from '../notes/NotesScreen'
import { JournalLayout } from './JournalLayout'
import { NothingSelected } from './NothingSelected'
import { useSelector } from 'react-redux';

export const JournalScreen = () => {

    const { active } = useSelector( state => state.notes )

    return (
        
        <ThemeProvider theme={ journalTheme } >
            <JournalLayout>
                
                {
                    (active) 
                        ? <NotesScreen />
                        : <NothingSelected />
                }
                
            </JournalLayout>
        </ThemeProvider>
        
    )
}
