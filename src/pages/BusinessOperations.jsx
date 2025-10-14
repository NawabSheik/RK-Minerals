import React from 'react';
import Brand from "../components/Brand";
import "../styles/BusinessOperations.css";
import Cta from '../components/cta';
import Mining from '../assets/mining.webp';
import Processing from '../assets/processing.webp';
import Quality from '../assets/quality.webp'

const BusinessOperations = () => {
  return (
    <div>
        <Brand/>
        <div className="business-operations">
        <div className="business-hero-section">
            <div className="business-hero">
            <h2 className='business-head'>Business Operations</h2>
            
            <h3 className='business-one-liner'>Driving growth with minerals that matter</h3>
            <span className='business-stroke'></span>
            <p className="business-para">At RK Minerals, business operations go far beyond the simple act of extracting and supplying minerals. We see ourselves as a vital bridge between natural resources and industries that shape the modern world. From the first stage of exploration to the final delivery of refined minerals, every operation at RK Minerals is designed with precision, backed by technology, and guided by responsibility.
                <br/> <br/> Over the years, we have built a reputation not only as a reliable mining and mineral supplier but also as an organization that prioritizes sustainability, transparency, and long-term partnerships.</p>
        </div>
        </div>

        <div className='mining-explained'>
            <div className='mining-div'>
                <h2 className='mining-head'>Mining</h2>
                <div className="mining-explaination">
                <div className="mining-pointers">
                <div className='mining-pointer'>
                    <p className='pointer-explained'>RK Mineral has own mining areas in the pegmatite rich belt of Rajasthan in India.</p>
                </div>
                <div className='mining-pointer'>
                    <p className='pointer-explained'>After a meticulous research and study by our team of geologists, these mining areas have been chosen for their long-term consistency and raw material security.</p>
                </div>
                <div className='mining-pointer'>
                    <p className='pointer-explained'>Our efforts and energies are directed towards ensuring that uncontaminated and good quality ore is mined from our mines.</p>
                </div>
                <div className='mining-pointer'>
                    <p className='pointer-explained'>Mining processes are carried out using modern mechanised systems that enable efficient segregation of ores into different grades.</p>
                </div>
                <div className='mining-pointer'>
                    <p className='pointer-explained'>Our competent teams of geologists and mining engineers have worked relentlessly to ensure that our mines are so developed as to produce the best minerals in terms of quality and consistent supply.</p>
                </div>
                <div className='mining-pointer'>
                    <p className='pointer-explained'>Utmost important of all, realizing that all mineral resources are limited, continuous emphasis is given to mineral conservation thereby maximizing usable mineral recovery from mined ore.</p>
                </div>
                </div>
                <img src={Mining}/>
                </div>
            </div>

        </div>
         
         <div className='mining-explained'>
            <div className='mining-div'>
                <h2 className='mining-head'>Processing</h2>
                 <div className="processing-explaination">
                    <div className='processing-pointers'>
                <p className='processing-explained'>
                    We employ some of the most advanced techniques for our mineral
                    processing activities. Our machines are lined with special silex media to
                    eliminate iron contamination. The machines are powered with high-capacity
                    rare magnetic separation system to ensure that our products meet
                    international standards of quality in white mineral grinding.
                    Astringent and consistent process control is implemented through all stages
                    of processing, to ensure that the product is of high quality. Our flexible and
                    advanced grinding techniques enable us to supply minerals in varying sizes:
                </p>
               

                
                <div className='processing-pointer'>
                    <p className='processing-pointer-explained'><b>O Mesh to 325 Mesh in powder. </b></p>
                </div>
                <div className='processing-pointer'>
                    <p className='processing-pointer-explained'><b>0 mm to 15 mm in grains. </b> </p>
                </div>
                </div>
                <img src={Processing}/>
                
                </div>
            </div>

        </div>
            <div className='mining-explained'>
            <div className='mining-div'>
                <h2 className='mining-head'>Quality Control</h2>
                <div className="quality-explaination">
                <p className='quality-explained'>
                    We at RK minerals believes that strength of any organization lies in its ability
                    to satisfy customer needs by adhering to stringent quality control measures. 
                    We understand that R&D is an ongoing process and to set & match the global
                    standards of quality, it is vital to stride the path of innovation.
                    Our R&D wing and technical team include well equipped and knowledgeable
                    chemists from the industry of white minerals and their possible applications. <br/><br/>
                    Consequent to the continuous R&D efforts of our competent technicians we
                    are proudly recognized as the leaders in terms of quality & product mix in the
                    industry.
                     
                </p>
                <img src={Quality}/>
                </div>
               
    
            </div>
           
        </div>
         

          <Cta/>
          </div>
    </div>
  )
}

export default BusinessOperations
