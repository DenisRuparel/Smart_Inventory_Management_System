import React from 'react'
import Navbar from './Navbar'

function EquipmentDetails() {
  return (
    <>
        <div id="global-loader">
                <div className="whirly-loader"> </div>
            </div>
            <div className="main-wrapper">
            <Navbar title="Administrator"/>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="page-header">
                            <div className="page-title">
                                <h4>Equipment Details</h4>
                                <h6>Full details of a Equipment..!</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        {/* <div className="bar-code-view">
                                            <img src="../assets/img/barcode1.png" alt="barcode" />
                                            <a className="printimg">
                                                <img src="../assets/img/icons/printer.svg" alt="print" />
                                            </a>
                                        </div> */}
                                        <div className="productdetails">
                                            <ul className="product-bar">
                                                <li>
                                                    <h4>Serial Number</h4>
                                                    <h6>S1211221 </h6>
                                                </li>
                                                <li>
                                                    <h4>Name</h4>
                                                    <h6>Mackbook Pro</h6>
                                                </li>
                                                <li>
                                                    <h4>Type</h4>
                                                    <h6>None</h6>
                                                </li>
                                                {/* <li>
                                                    <h4>Price</h4>
                                                    <h6>150000</h6>
                                                </li>
                                                <li>
                                                    <h4>Purchase Date </h4>
                                                    <h6>13/03/2024</h6>
                                                </li>
                                                <li>
                                                    <h4>Used By</h4>
                                                    <h6>student</h6>
                                                </li> */}
                                                <li>
                                                    <h4>Used Date</h4>
                                                    <h6>13/03/2024</h6>
                                                </li>
                                                <li>
                                                    <h4>Status</h4>
                                                    <h6>Working</h6>
                                                </li>
                                                <li>
                                                    <h4>Description</h4>
                                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                        since the 1500s,</h6>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="slider-product-details">
                                            <div className="owl-carousel owl-theme product-slide">
                                                <div className="slider-product">
                                                    <img src="../assets/img/product/product69.jpg" alt="img" />
                                                    <h4>macbookpro.jpg</h4>
                                                    <h6>581kb</h6>
                                                </div>
                                                <div className="slider-product">
                                                    <img src="../assets/img/product/product69.jpg" alt="img" />
                                                    <h4>macbookpro.jpg</h4>
                                                    <h6>581kb</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default EquipmentDetails
