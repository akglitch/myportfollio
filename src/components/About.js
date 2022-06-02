import { Row, Col } from 'antd';
import { skills } from './assets/data'
import { motion } from 'framer-motion'


const Services = () => {

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '-100vh'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', duration: 4 }
    },
    exit: {
      x: "-100vw",
      transition: { ease: 'easeInOut' }
    }

};

    return (
        <motion.div id="about" className="services container my-5 mb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="mb-4" class ="stack"> What I Do</h2>
      <Row className="mt-5">
      {skills.map((service) => {
        return(
          <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
            <div key={service.id} data-aos="zoom-out-down" data-aos-duration="1500" className="info-card my-4">
              <img alt="icon" src={service.icon}/>
            <p className='my-2 display-5 card-h4'class="service"> {service.heading} </p>
              <p class="card-text">{service.text}</p>
      </div>

      </Col>
        )
      })
     }

      </Row>



</motion.div>
    )
}


export default Services
