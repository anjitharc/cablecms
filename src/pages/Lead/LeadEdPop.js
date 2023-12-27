import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io';

export default function LeadEdPop(props) {
  const {title, children, openPopuptwo, setOpenPopuptwo} = props;

    return (
   <Dialog open={openPopuptwo}>
<DialogTitle>
    <div>
Add Lead <IoMdCloseCircle type='button' variant="contained" size="25" style={{float: 'right'}} color="red" className="float-right"  onClick={() => setOpenPopuptwo(false)} />
    </div>
</DialogTitle>
<DialogContent>
{children}
</DialogContent>

    </Dialog>
  )
}
