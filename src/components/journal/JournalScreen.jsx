
import { ThemeProvider } from '@emotion/react'
import React from 'react'

import { journalTheme } from '../../theme/journalTheme'
import { NotesScreen } from '../notes/NotesScreen'
import { JournalLayout } from './JournalLayout'
import { NothingSelected } from './NothingSelected'


export const JournalScreen = () => {

    return (
        
        <ThemeProvider theme={ journalTheme } >
            <JournalLayout>
                {/* <NothingSelected /> */}
                <NotesScreen />
            </JournalLayout>
        </ThemeProvider>
        
    )
}
