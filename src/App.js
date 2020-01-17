import React from 'react'
import Providers from './contexts'

import Header from './components/Header'
import Nested from './components/Nested'

export default function App() {
  return (
    <Providers>
      <Nested>
        <Header />
      </Nested>
    </Providers>
  )
}
