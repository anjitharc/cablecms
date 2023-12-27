import React ,{ useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserMinus, FaRegEdit } from "react-icons/fa";
import { BiPlusMedical, BiUserPlus } from "react-icons/bi";
import { Divider } from "@material-ui/core";
import CmplntAdd from "./CmplntAdd";
import Popup from "./Popup";
import CmplntFetch from "./CmplntFetch";
import { AiOutlinePrinter , AiOutlineRollback} from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { Url } from "../../Global";


const PrintCmplntlst = () => {

  const navigate = useNavigate();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Complaint List",
    onAfterPrint: () => navigate("/cmplntlist"),
    
  });

  const [cmplntdta, cmplntdtachange] = useState(null);
  useEffect(() => {
    fetch(Url + "complaint")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cmplntdtachange(resp.data);
        console.log(resp);
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  
 
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



  return (
    <div className="container">
    <AiOutlinePrinter
    type="button"
    variant="contained"
    size="30"
    style={{ float: "left" }}
    color="blue" 
    className="float-right" onClick={handlePrint} 
  ></AiOutlinePrinter>

<AiOutlineRollback type="button"
    variant="contained"
    size="30"
    style={{ float: "right" }}
    color="blue" 
    className="float-left" onClick={() => navigate(-1)}></AiOutlineRollback>
          <div
            ref={componentRef}
            style={{ height: window.innerHeight , marginTop:"20px",
             marginRight:"20px",
             marginBottom:"20px",
             marginLeft:"15px" }}
          >          

            <h5 className="table-header">COMPLAINT LIST </h5>
            <p>DATE :{date}</p>
            <table className="table table-bordered table-sm" >
              <thead className="bg-light text-black">
                
                <tr>
                  <td>ID</td>
                  <td>TICKET NO</td>
                  <td>NAME</td>
                  <td>PHONE</td>
                  <td>ADDRESS</td>
                  <td>CATAGORY</td>
                 
                 
                </tr>
              </thead>
              <tbody>
                {cmplntdta &&
                  cmplntdta.map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{data.ticket}</td>
                      <td>{data.customer}</td>
                      <td>{data.phone}</td>
                      <td>{data.address}</td>
                      <td>{data.category}</td>
                    
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          </div>
  );
};
export default PrintCmplntlst;
