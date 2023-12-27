import { Dialog, DialogContent, DialogTitle, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io';

const useStyles = makeStyles(theme =>({
  dialogWrapper : {
    padding : theme.spacing(2),
    position : 'absolute',
    top : theme.spacing(5)
  }
}))

export default function Pops(props) {
  const {title, children, openPopup, setOpenPopup} = props;
  const classes = useStyles();

    return (
   <Dialog open={openPopup} maxWidth="sm" classes={{ paper : classes.dialogWrapper}}>
<DialogTitle>
    <div style={{display : "flex"}}>
      <Typography variant='h6' component="div" style={{flexGrow:1}}>
        {title}
      </Typography>
<IoMdCloseCircle type='button' variant="contained" size="25" style={{float: 'right'}} color="red" className="float-right"  onClick={() => setOpenPopup(false)} />
    </div>
</DialogTitle>
<DialogContent>
{children}
</DialogContent>

    </Dialog>
  )
}
