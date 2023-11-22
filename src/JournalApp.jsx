 import { Provider } from 'react-redux';
import React from 'react'

import { AppRouter } from './routers/AppRouter'
import { AppTheme } from './theme/AppTheme'
import { store } from './store/store';

export const JournalApp = () => {
  return (
    <Provider store={ store }>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Provider>
  )
}
