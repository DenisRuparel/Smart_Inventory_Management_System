import React from 'react'
import Navbar from '../../components/Navbar'

function UsersList() {
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
                            <h4>List Of Users</h4>
                            <h6>Manage Users Here..!</h6>
                        </div>
                        {/* <div className="page-btn">
                            <a href="addcustomer.html" className="btn btn-added"><img src="../assets/img/icons/plus.svg" alt="img" />Add Customer</a>
                        </div> */}
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
                            <div className="card" id="filter_inputs">
                                <div className="card-body pb-0">
                                    <div className="row">
                                        <div className="col-lg-2 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="User Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="User ID" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6 col-12  ms-auto">
                                            <div className="form-group">
                                                <a className="btn btn-filters ms-auto"><img src="../assets/img/icons/search-whites.svg" alt="img" /></a>
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
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>User ID</th>
                                            <th>Phone</th>
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
                                                <a href="javascript:void(0);" className="product-img">
                                                    <img src="../assets/img/customer/customer5.jpg" alt="product" />
                                                </a>
                                                <a href="javascript:void(0);">Thomas</a>
                                            </td>
                                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1165797e7c7062517469707c617d743f727e7c">[email&nbsp;protected]</a>
                                            </td>
                                            <td>D23CS000 </td>
                                            <td>+12163547758 </td>
                                            
                                            <td>
                                                {/* <a className="me-3" href="editcustomer.html">
                                                    <img src="../assets/img/icons/edit.svg" alt="img" />
                                                </a> */}
                                                <a className="me-3 confirm-text" href="javascript:void(0);">
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

export default UsersList
