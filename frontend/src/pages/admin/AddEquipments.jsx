import React from 'react'
import Navbar from '../../components/Navbar'

function AddEquipments() {
    return (
        <>
            <div id="global-loader">
                <div className="whirly-loader"> </div>
            </div>
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

                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment Serial Number</label>
                                        <input type="text" placeholder="Enter Equipment Serial Number" />
                                    </div>
                                </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment Name</label>
                                        <input type="text" placeholder="Enter Equipment Name" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment Type</label>
                                        <select className="select">
                                            <option>Monitor</option>
                                            <option>Keyboard</option>
                                            <option>Mouse</option>
                                            <option>CPU</option>
                                            <option>Projector</option>
                                            <option>Speakers</option>
                                            <option>Cabales</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment Price</label>
                                        <input type="text" placeholder="Enter Product Price" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Purchase Date</label>
                                        <input type="text" placeholder="DD-MM-YYYY" className="datetimepicker" />
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment User</label>
                                        <select className="select">
                                            <option>Admin</option>
                                            <option>Faculty</option>
                                            <option>Student</option>
                                            <option>Lab Technician</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Used Date</label>
                                        <input type="text" placeholder="DD-MM-YYYY" className="datetimepicker" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Equipment status</label>
                                        <select className="select">
                                            <option>Working</option>
                                            <option>Not Working</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Equipment Discription</label>
                                        <textarea className="form-control" placeholder="Describe Equipment"></textarea>
                                    </div>
                                </div>
                                {/* <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Total</label>
                                        <input type="text" placeholder="Total Spended Money"/>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Bank</label>
                                        <select className="select">
                                            <option>People's Bank</option>
                                            <option>SBI Bank</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label> Equipment Image</label>
                                        <div className="image-upload">
                                            <input type="file" />
                                            <div className="image-uploads">
                                                <img src="../assets/img/icons/upload.svg" alt="img" />
                                                <h4>Drag and drop a file to upload</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <a href="/" className="btn btn-submit me-2">Save</a>
                                    <a href="/home" className="btn btn-cancel">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEquipments
