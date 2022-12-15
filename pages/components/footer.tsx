import Link from "next/link"
import React from "react"
import { Button } from "react-bootstrap"

const Footer = () => {
  return ( <footer className="page-footer font-small blue pt-5">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-6 mt-md-0 mt-3 d-flex justify-content-end">
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
             
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
  </footer>
  )
}
export default Footer