import { Dialog, DialogContent, DialogTitle, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io';

const useStyles = makeStyles(theme =>({
  dialogWrapper : {
    padding : theme.spacing(2),
    position : 'absolute',
    top : theme.spacing(5),
    minHeight: '80vh',
        maxHeight: '80vh',
  }
}))

export default function CustAddPop(props) {
  const {title, children, openPopup, setOpenPopup} = props;
  const classes = useStyles();

    return (
   <Dialog open={openPopup}  fullWidth={true}  maxWidth="md" classes={{ paper : classes.dialogWrapper}}>
<DialogTitle>
    <div style={{display : "flex"}}>
      <Typography variant='h6' component="div" style={{flexGrow:1}}>
        {title}
      </Typography>
<IoMdCloseCircle type='button' variant="contained" size="25" style={{float: 'right'}} color="red" className="float-right"  onClick={() => setOpenPopup(false)} />
    </div>
</DialogTitle>
<DialogContent  style={{ overflow: "hidden" }}>
{children}
</DialogContent>

    </Dialog>
  )
}
