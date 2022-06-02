import {techStack} from './assets/data'
import { motion } from "framer-motion"
import  codeSvg from './utils/svgs/code.svg'
import { Row, Col  } from 'antd'



const Skills = () => {

    return (
        <div >
        <div className='container'>
        <h2 className=' mt-5 mb-3' class = "stack"> My Stack </h2>
        <Row >
        <Col xs={{span:24}} sm={{span:24}} md={{span:24}} lg={{span:12}} >
        <div className="hero-img p-3 m-4">
          <motion.img
            animate={{ scale: [0.2, 1.5, 1] }}
            transition={{ ease: "easeOut", duration: 2 }}
           src={codeSvg} className="img-fluid" alt="svg" loading="lazy" />
        </div>
        </Col>
          <Col sm={{span:24}} lg={{span:12}} md={{span:24}}>
          <div className='devIcons p-1 m-4'>
            {
              techStack.map((item) => {
                return(
                  <div
                   key={item.id} className="iconImg ">
                    <motion.img
                    whileHover={{ scale: 1.2, rotate: 360, duration: 2, opacity:1}}
                    whileTap={{
                      scale: 0.8,
                      rotate: -360,
                      borderRadius: "100%"}}  alt="dev_icon" src={item.icon} width='65'/>
                    <p
                    className='text-center mt-1 devicon-text'>
                      {item.name}
                    </p>
                  </div>
                )
              })
            }
          </div>

          </Col>

        </Row>

          </div>
        </div>
    )
}


export default Skills
