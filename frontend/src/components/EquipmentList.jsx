import React from 'react'
import Navbar from './Navbar'

function EquipmentsList() {
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
                            <h4>Equipments List</h4>
                            <h6>Manage Your Equipments Here..!</h6>
                        </div>
                        <div className="page-btn">
                            <a href="/admin/addequipments" className="btn btn-added"><img src="../assets/img/icons/plus.svg" alt="img" className="me-1" />Add New Equipment</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-top">
                                <div className="search-set">
                                    <div className="search-path">
                                        <a className="btn btn-filter" id="filter_search">
                                            <img src="../assets/img/icons/filter.svg" alt="img" />
                                            <span><img src="../assets/img/icons/closes.svg" alt="img" /></span>
                                        </a>
                                    </div>
                                    <div className="search-input">
                                        <a className="btn btn-searchset"><img src="../assets/img/icons/search-white.svg" alt="img" /></a>
                                    </div>
                                </div>
                                <div className="wordset">
                                    <ul>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="../assets/img/icons/pdf.svg" alt="img" /></a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="../assets/img/icons/excel.svg" alt="img" /></a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="../assets/img/icons/printer.svg" alt="img" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mb-0" id="filter_inputs">
                                <div className="card-body pb-0">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="row">
                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Name" />
                                                    </div>
                                                </div>

                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Serial Number" />
                                                    </div>
                                                </div>
                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Type" />
                                                    </div>
                                                </div>
                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Use By" />
                                                    </div>
                                                </div>
                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Status" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-1 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <a className="btn btn-filters ms-auto"><img src="../assets/img/icons/search-whites.svg" alt="img" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table  datanew">
                                    <thead>
                                        <tr>
                                            <th>
                                                <label className="checkboxs">
                                                    <input type="checkbox" id="select-all" />
                                                    <span className="checkmarks" />
                                                </label>
                                            </th>
                                            <th>Name</th>
                                            <th>Serial Number</th>
                                            <th>Type</th>
                                            <th>Use By </th>
                                            <th>Status </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label className="checkboxs">
                                                    <input type="checkbox" />
                                                    <span className="checkmarks" />
                                                </label>
                                            </td>
                                            <td className="productimgname">
                                                <a href="/equipmentdetails" className="product-img">
                                                    <img src="../assets/img/product/product69.jpg" alt="product" />
                                                </a>
                                                <a href="/equipmentdetails">Macbook pro</a>
                                            </td>
                                            <td>PT001</td>
                                            <td>Monitor</td>
                                            <td>Admin</td>
                                            <td>working</td>
                                            <td>
                                                <a className="me-3" href="/equipmentdetails">
                                                    <img src="../assets/img/icons/eye.svg" alt="img" />
                                                </a>
                                                <a className="me-3" href="/admin/editequipment">
                                                    <img src="../assets/img/icons/edit.svg" alt="img" />
                                                </a>
                                                <a className="confirm-text">
                                                    <img src="../assets/img/icons/delete.svg" alt="img" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EquipmentsList
