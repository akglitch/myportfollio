import contImg from './utils/svgs/contact.svg'
import { Row, Col } from 'antd'
const Contact = () =>  {

    return (
        <div id="contact" className="container" >
                <h2 className="mb-4" class = "stack"> Contact. </h2>

                
             <Row >
            <Col xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:0}} >
            <div>
              <img src={contImg} className="img-fluid my-3" alt="svg" loading="lazy" />
            </div>
            </Col>
              <Col sm={{span:24}} lg={{span:12}} md={{span:12}}>
                <div className="contacts">
                <h3>
                <section class="mb-4">
                  <h5>you can contact me via</h5>
                  
     <div class="contact">
      <a class="btn btn-outline-dark btn-floating m-1" href="https://web.facebook.com/profile.php?id=100065660621320" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

    
      <a class="btn btn-outline-dark btn-floating m-1" href="#none" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

    
     

      
      <a class="btn btn-outline-dark btn-floating m-1" href="https://www.instagram.com/ak_deez/" role="button"
        ><i class=" fab fa-brands fa-instagram"></i></a>

     
      <a class="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/kwaku-ntiri-aninakwa-b01ba5221/" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      
      <a class="btn btn-outline-dark btn-floating m-1" href="https://github.com/akglitch" role="button"
        ><i class="fab fa-github"></i
      ></a>
      </div>
    </section>
                
                 </h3>

                </div>
              </Col>
              <Col xs={{span:0}} sm={{span:0}} md={{span:0}} lg={{span:12}} >
              <div className="">
                <img src={contImg} className="img-fluid my-3" alt="svg" loading="lazy" />
              </div>
              </Col>
            </Row>
        </div>

    )
}


export default Contact
