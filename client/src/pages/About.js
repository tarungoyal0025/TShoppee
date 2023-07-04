import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <div className='my-3' style={{ font: "revert", fontSize: "30px" }}>
                    ABOUT US
                </div>
                <div className='my-3' style={{ font: "revert", fontSize: "30px" }}>
                    WHO WE ARE?
                </div>
                <div className='my-2 fs-5'>
                    Born in 2023, on the streets of Chandigarh, worn in the world today.
                    As footwear and accessories pioneer,
                    we have consistently reinvented
                    the definition of footwear and accessories
                    to keep up with the trends.
                    we at T SHOPPEE, have supreme discipline in the shoe manufacture.
                    We offer a combination of invention & craftsmanship
                    that remains at the heart of what we do;
                    & hence every product begins with a last carved
                    by hand, advanced construction techniques & contemporary material.
                </div>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
