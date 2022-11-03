import React from 'react';
import './stylesheets/footer.css'
function Footer() {
    return (
        <footer>
            <div class="footer-wrap">
                <div class="second_class">
                    <div class="container second_class_bdr">
                        <div class="row">
                            <div class="col-md-4 col-sm-6">

                                <div id="footerlogo"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo" height='50px' width='50px' />
                                </div>
                                <p>Your one-stop career platform to find Jobs, Internships, Professional Trainings, Projects, and Volunteering Opportunities.</p>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <h3 className='text-info'>Quick  LInks</h3>
                                <ul class="footer-links">
                                    <li><a href="#">Home</a>
                                    </li>
                                    <li><a href="#">About us</a>
                                    </li>
                                    <li><a href="#">Triedge Partners</a>
                                    </li>
                                    <li><a href="#">Contact Us</a>
                                    </li>
                                    <li><a href="#" target="_blank">Terms &amp; Conditions</a>
                                    </li>
                                    <li><a href="#" target="_blank">Privacy Policy</a>
                                    </li>
                                    <li><a href="#">Sitemap</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <h3 className='text-info'>OUR SERVICES</h3>
                                <ul class="footer-category">
                                    <li><a href="#">Fresher Jobs</a>
                                    </li>
                                    <li><a href="#">InternEdge - Internships &amp; Projects </a>
                                    </li>
                                    <li><a href="#">Resume Edge - Resume Writing Services</a>
                                    </li>
                                    <li><a href="#">Readers Galleria - Curated Library</a>
                                    </li>
                                    <li><a href="#">Trideus - Campus Ambassadors</a>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <h3 className='text-info'>triedge Events</h3>
                                <ul class="footer-links">
                                    <li><a href="#">Triedge Events</a>
                                    </li>

                                    <li><a href="#">Jobs &AMP; Internship Fair 2019</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">

                    <div class="container-fluid">
                        <div class="copyright"> Copyright 2019 | All Rights Reserved by TRIEDGE Solutions Pvt. Ltd.</div>
                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;