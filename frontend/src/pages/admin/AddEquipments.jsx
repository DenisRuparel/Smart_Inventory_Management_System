import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './../../utils/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddEquipments() {
    const [credentials, setCredentials] = useState({
        serial_number: undefined,
        name: undefined,
        eq_type: undefined,
        equipment_status: undefined,
        description: undefined,
    });

    const navigate = useNavigate();

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value}));
    }

    const handleClick = async e =>{
        e.preventDefault();
        
        try {
          const res = await fetch(`${BASE_URL}equipments/createequipment`, {
            method: 'post',
            headers:{
              'content-type':'application/json'
            },
            credentials:'include',
            body: JSON.stringify(credentials)
          })
    
          const result = await res.json()
    
          if(!res.ok){
            toast.error(result.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          else{
            toast.success(result.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            console.log(result.data)
            navigate('/admin/addequipments')
          }
        } catch (error) {
            console.log(error)
        }
      }
    
    return (
        <>
            <div id="global-loader">
                <div className="whirly-loader"> </div>
            </div>
            <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
            <div className="page-wrapper">
            <Navbar title="Administrator"/>
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Hi! Add Your Equipment</h4>
                            <h6>Add Your New Equipment Here..!</h6>
                        </div>

                        <div className="page-btn">
                            <a href="/equipmentslist" className="btn btn-added"><img src="../assets/img/icons/eye.svg" alt="img" className="me-1" />Show List Of Equipments</a>
                        </div>
                    </div>
                <form onSubmit={handleClick}>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment Serial Number</label>
                                        <input type="text" name="serial_number" id='serial_number' placeholder="Enter Equipment Serial Number" onChange={handleChange}/>
                                    </div>
                                </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment Name</label>
                                        <input type="text" name="name" id='name' placeholder="Enter Equipment Name" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment Type</label>
                                        <select className="select" value={credentials} name='eq_type' id='eq_type' onChange={handleChange}>
                                            <option value="monitor">Monitor</option>
                                            <option value="keyboard">Keyboard</option>
                                            <option value="mouse">Mouse</option>
                                            <option value="cpu">CPU</option>
                                            <option value="projector">Projector</option>
                                            <option value="speakers">Speakers</option>
                                            <option value="cabales">Cabales</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment status</label>
                                        <select className="select" value={credentials} name='equipment_status' id='equipment_status' onChange={handleChange}>
                                            <option value="working">Working</option>
                                            <option value="not working">Not Working</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Equipment Discription</label>
                                        <textarea className="form-control" name="description" id='description' placeholder="Describe Equipment" onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label> Equipment Image</label>
                                        <div className="image-upload">
                                            <input type="file" name='photo' id='photo' onChange={handleChange}/>
                                            <div className="image-uploads">
                                                <img src="../assets/img/icons/upload.svg" alt="img" />
                                                <h4>Drag and drop a file to upload</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="btn btn-submit me-2">Save</button>
                                    <button className="btn btn-cancel">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                </div>
            </div>
        </>
    )
}

export default AddEquipments
