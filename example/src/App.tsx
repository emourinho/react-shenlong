import React, { useState } from 'react'
import { Button } from '@mui/material'

import { ShenDialog } from 'react-shenlong'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      display: "flex", width: "100vw", height: "100vh",
      alignItems: "center", justifyContent: "center"
    }}>
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Abrir
      </Button>
      <ShenDialog title="Titulo do modal" open={open} onClose={() => setOpen(!open)}>
        Teste Everton
      </ShenDialog>
    </div>
  )
}

export default App
