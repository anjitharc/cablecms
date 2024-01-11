import axios from "axios";
import React, { useEffect, useState } from "react";
import { Url } from "../../Global";
import {
  Container,
} from "@material-ui/core";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Form } from "react-bootstrap";

const ExcelUpload = () => {
  const [file, setFile] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState(true);

  const handleSwitchChange = (event) => {
    setType(event.target.checked);
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = Url + "customer_upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      alert("Data Uploaded Successfully");
    });
  }

  useEffect(() => {
    fetch(Url + "customer_excel_download")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleDownload = () => {
    console.log("test data", products);
  };

  return (
    <Container>
      <div align="left"  style={{paddingBottom: 10}}>
      <Form.Check
              type="switch"
              id="custom-switch"
              name="ratingCheckbox"
              checked={type}
              onChange={handleSwitchChange}
              label={type ? 'Cable TV' : 'Broadband'}
            />
        </div>


      {type && (
        <div className="card">
          <form onSubmit={handleSubmit}>
            <h5 className="card-header">Cable TV Customer Upload</h5>
            <br></br>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
          </form>
          <br></br>{" "}
          <a
            link
            href="http://103.146.174.105:8080/TECHNIQUES//techniques/customer_excel_download"
          >
            Click Here To Download Sample File{" "}
          </a>
        </div>
      )}

      {!type && (
        <div className="card">
          <form onSubmit={handleSubmit}>
            <h5 className="card-header">Broadband Customer Upload</h5>
            <br></br>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
          </form>
          <br></br>{" "}
          <a
            link
            href="http://103.146.174.105:8080/TECHNIQUES//techniques/customer_excel_download"
          >
            Click Here To Download Sample File{" "}
          </a>
        </div>
      )}
    </Container>
  );
};

export default ExcelUpload;
