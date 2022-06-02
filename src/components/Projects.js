import {Row, Col, Image } from 'antd'
import {projects} from './assets/myprojects'


const Projects = ( ) => {

    return (
        <div id="projects" className="container">

        <h2 className=' mt-5 mb-3' class = "stack"> Projects </h2>
<Row>
{projects.map((project) => {
return(<Col xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:8}}>
        <div key={project.id} className="card rounded-3 mb-5 m-3 project_card">
          <div className="px-2 ">
            <div>
           <Image src={project.img} alt="pic" className="mt-n6 pt-2 img-fluid w-100 smooth-shadow-md rounded-3"/>
            </div>
          </div>
          <div className="card-body px-4 py-5 p-md-8">
            <div className="border-bottom pb-3 mb-5">
              <h3 className="mb-2 fw-bold display-5"> <a href="#slime" className="text-inherit" class="stack">{project.name}</a></h3>
              <p className="lead">When setting up a site or app for your university
                or school, Geeks courses and education
                template is an ideal tool to start.</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <a href={project.site} target="_blank" rel="noreferrer" className="btn btn-outline-primary mx-2">
                Live demo <i className="fe fe-arrow-right"></i>

              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline-primary mx-2">
                github <i className="fe fe-arrow-right"></i>

              </a>
            </div>

          </div>
        </div>
        </Col>    )
      })
}
        </Row>

        </div>
    )
}

export default Projects
