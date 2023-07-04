import React from 'react'
import Layout from '../components/layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
        <p className="text-justify mt-2">
        We're happy to answer questions. We will do our best to respond to you within 24 hours,
             sometimes a bit longer on weekends.
        </p>
        <p className="mt-3">
          <BiMailSend /> : Tshoppee@gmail.com
        </p>
        <p className="mt-3">
          <BiPhoneCall /> : +91 9876543210
        </p>
        <p className="mt-3">
          <BiSupport /> : 1800-0000-0000 (toll free)
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default Contact

