import * as React from 'react'
import { Dialog, DialogProps, Fab, Icon } from '@mui/material'

export const ShenDialog = ({ children, ...others }: DialogProps) => {
  return (
    <Dialog fullWidth maxWidth='md' {...others}>
      <div style={{ textAlign: 'right', height: 8 }}>
        <Fab
          onClick={others?.onClose || console.log}
          style={{
            width: 35,
            height: 35,
            position: 'fixed',
            margin: '-20px 0 0 -20px'
          }}
        >
          <Icon style={{ fontWeight: 'bold' }}>close</Icon>
        </Fab>
      </div>
      <main>{children}</main>
    </Dialog>
  )
}
