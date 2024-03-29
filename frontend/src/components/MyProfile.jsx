import React from 'react'
import Navbar from './Navbar'

function MyProfile() {
    return (
        <>
            <div id="global-loader">
                <div class="whirly-loader"> </div>
            </div>

            <div class="main-wrapper">
            <Navbar title="Administrator"/>
                <div class="page-wrapper">
                    <div class="content">
                        <div class="page-header">
                            <div class="page-title">
                                <h4>Profile</h4>
                                <h6>My Profile</h6>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="profile-set">
                                    <div class="profile-head">
                                    </div>
                                    <div class="profile-top">
                                        <div class="profile-content">
                                            <div class="profile-contentimg">
                                                <img src="../assets/img/customer/customer5.jpg" alt="img" id="blah" />
                                                <div class="profileupload">
                                                    <input type="file" id="imgInp" />
                                                    <a href="/"><img src="../assets/img/icons/edit-set.svg"
                                                        alt="img" /></a>
                                                </div>
                                            </div>
                                            <div class="profile-contentname">
                                                <h2>Denis Ruparel</h2>
                                                <h4>Updates Your Photo and Personal Details.</h4>
                                            </div>
                                        </div>
                                        <div class="ms-auto">
                                            <a href="/" class="btn btn-submit me-2">Save</a>
                                            <a href="/" class="btn btn-cancel">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-sm-12">
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input type="text" placeholder="William" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Last Name</label>
                                            <input type="text" placeholder="Castilo" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="text" placeholder="william@example.com" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input type="text" placeholder="+1452 876 5432" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-12">
                                        <div class="form-group">
                                            <label>User Name</label>
                                            <input type="text" placeholder="+1452 876 5432" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <div class="pass-group">
                                                <input type="password" class=" pass-input" />
                                                <span class="fas toggle-password fa-eye-slash"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <a href="/" class="btn btn-submit me-2">Submit</a>
                                        <a href="/" class="btn btn-cancel">Cancel</a>
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

export default MyProfile
