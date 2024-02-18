import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserMinus, FaRegEdit } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";
import { Url } from "../../Global";
import { Backdrop, Box, CircularProgress, Container, Divider, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import ReactPaginate from "react-paginate";



const ClosedList = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const LoadEdit = (id) => {

    navigate("/leadedit/" + id);

  }

  const [leaddta, leaddtachange] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(Url + "closed_complaints")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        leaddtachange(resp.data);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  return (
    <>
     <Container maxWidth>
          <h5 className="rs-table-affix-header" style={{ textAlign: "left" , marginBottom: '30px'}}>Closed Complaints</h5>
          <Divider />
<Box>




</Box>

          {loading &&
            <LinearProgress />}
          <TableContainer>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center"><b>Sl.No</b></TableCell>
                  <TableCell align="left"><b>Ticket</b></TableCell>
                  <TableCell align="left"><b>Name</b></TableCell>
                  <TableCell align="left"><b>Address</b></TableCell>
                  <TableCell align="left"><b>Category</b></TableCell>
                  <TableCell align="left"><b>Complaint</b></TableCell>
                  <TableCell align="left"><b>Staff Closed</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>


                {leaddta &&
                  leaddta.map((item, index) => (
                    <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="center">{index + 1}
                      </TableCell>
                      <TableCell align="left">{item.ticket}</TableCell>
                      <TableCell align="left">{item.customer}</TableCell>
                      <TableCell align="left">{item.address}</TableCell>
                      <TableCell align="left">{item.category}</TableCell>
                      <TableCell align="left">{item.complaint}</TableCell>
                      <TableCell align="left">{item.closedStaffName}</TableCell>

                    </TableRow>

                  ))}
              </TableBody>
            </Table>

          

          </TableContainer>
<br></br><br></br>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={"2"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={6}
            onPageChange={""}
            containerClassName={
              "pagination pagination-md justify-content-center"
            }
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />

    </Container>
    </>
  );
};
export default ClosedList;
