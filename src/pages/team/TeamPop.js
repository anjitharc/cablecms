import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io';

export default function TeamPop(props) {
  const {title, children, openPopup, setOpenPopup} = props;

    return (
   <Dialog Width="sm" open={openPopup}>
<DialogTitle>
    <div>
User Add <IoMdCloseCircle type='button' variant="contained" size="25" style={{float: 'right'}} color="red" className="float-right"  onClick={() => setOpenPopup(false)} />
    </div>
</DialogTitle>
<DialogContent>
{children}
</DialogContent>

    </Dialog>
  )
}
