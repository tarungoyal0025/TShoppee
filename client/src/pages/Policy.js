import React from 'react'
import Layout from '../components/layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
        <div className='mx-4'>
          <p>WHAT PERSONAL INFORMATION WE COLLECT</p>
          <p>HOW DO WE USE YOUR PERSONAL INFORMATION</p>
          <p>SHARING YOUR PERSONAL INFORMATION</p>
          <p>BEHAVIOURAL ADVERTISING</p>
          <p>YOUR RIGHTS</p>
          <p>DATA RETENTION</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
