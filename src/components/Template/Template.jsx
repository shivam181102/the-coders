import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Import Axios
import { Link } from 'react-router-dom';

const Template = () => {
    const [file, setFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState('file');
    const [temp_name, setTempName] = useState('')
    const [templateData, setTemplataeData] = useState({
        temp_name: '',
        mcq: [],
        code: [],
        fill: []
    })
    const handleToggleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const baseurl = "https://18b8-182-48-224-214.ngrok-free.app"
    const handleFileUpload = async (e) => {
        e.preventDefault()
        try {
            if (!file) {
                console.error('No file selected');
                return;
            }
            const formData = new FormData();
            formData.append('file', file);
            const response = await axios.post(`${baseurl}/api/excel`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            setTemplataeData({ temp_name: temp_name, mcq: response.data.data.mcq, code: response.data.data.code, fill: response.data.data.fill})
            console.log('parsed')
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const handleTempSubmit = async (e) => {
        e.preventDefault()
        // console.log(temp_name)
        console.log(templateData)
        if (!temp_name || !file) {
            console.error('Template name and file are required.');
            return;
        }

        try {
            const upload = await axios.post(`${baseurl}/api/temp`, templateData, {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem('token')
                }
            }).then((res) => [
                console.log(res.data.message)
            ])
        } catch (error) {
            console.log(error)
        }
    }
    const [totForm, settotForm] = useState(0);
    const baseURL = "https://18b8-182-48-224-214.ngrok-free.app";
  const header = {
    Authorization: "Bearer " + localStorage.getItem("token"),
    // "ngrok-skip-browser-warning": true
  };
  const [tmplates, settmplates] = useState([])
  const tempApi=async()=>{
    const response =await axios
      .get(`${baseURL}/api/temp`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "ngrok-skip-browser-warning": true,
        },
      })
      .then(function (response) {
        settmplates(response.data.data)
        settotForm(response.data.data.length)
        // console.log(response)
    })
    .catch(function (error) {
        console.log(error);
        
    });
}
const [question, setquestion] = useState()
const showquestion= async(temp_id)=>{
    const response =await axios
      .get(`${baseURL}/api/temp/${temp_id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "ngrok-skip-browser-warning": true,
        },
      })
      .then(function (response) {
        setquestion(response.data.data.mcq)
        console.log(response.data.data.mcq)
    })
    .catch(function (error) {
        console.log(error);
        
    });
}
useEffect(()=>{
    tempApi();
},[])


    return (
        <div>
            <Fab color="primary" id="floating-button" aria-label="add" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <AddIcon />
            </Fab>
            <div className="container ">
        {tmplates?.map((data,index)=>{
         return <div key={index} className="card">
        <div className="card-header">{data.temp_name} shiam</div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
          <button onClick={()=>showquestion(data.temp_id)} className="btn btn-primary" >
            View Responses
          </button>
          </div>
        </div>
      </div>
    }) }
    
      </div>
            <div className="mt-5 modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" onSubmit={handleTempSubmit}>
                                <input type="radio" onChange={handleToggleChange} name="toggle" value="file" checked={selectedOption === 'file'} /> Choose file{" "}
                                <input type="radio" onChange={handleToggleChange} name="toggle" value="manual" checked={selectedOption === 'manual'} /> Add questions
                                <div className={selectedOption === 'file' ? 'file' : 'manual'}>
                                    {selectedOption === 'file' && (
                                        <>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    aria-label="Sizing example input"
                                                    placeholder="Enter Template Name"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    onChange={(e) => { setTempName(e.target.value) }}
                                                />
                                            </div>

                                            <div className="input-group mb-3">
                                                <input type="file" className="form-control" accept='.xlsx' onChange={handleFileChange} id="inputGroupFile02" />
                                                <button onClick={handleFileUpload}>Parse</button>
                                            </div>
                                        </>
                                    )}
                                    {selectedOption === 'manual' && (
                                        <>
                                            <div className="manual">
                                                <p><a href="/template/addQuestions" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Add Questions </a></p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <br />
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Add template
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template;
