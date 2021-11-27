import * as React from 'react'
import { Dialog, DialogTitle, DialogProps, Fab, Icon } from '@mui/material'

interface ShenDialogProps extends DialogProps {
  title?: string
  subTitle?: string
}

export const ShenDialog = ({
  children,
  title,
  subTitle,
  ...others
}: ShenDialogProps) => {
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
      {title && <DialogTitle>{title}</DialogTitle>}
      {children}
    </Dialog>
  )
}
