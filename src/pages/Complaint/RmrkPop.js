import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io';

export default function RmrkPop(props) {
  const {title, children, openPopup, setOpenPopup} = props;

    return (
   <Dialog maxWidth fullWidth open={openPopup}>
<DialogTitle>
    <div>
Add Complaint <IoMdCloseCircle type='button' variant="contained" size="25" style={{float: 'right'}} color="red" className="float-right"  onClick={() => setOpenPopup(false)} />
    </div>
</DialogTitle>
<DialogContent>
{children}
</DialogContent>

    </Dialog>
  )
}
