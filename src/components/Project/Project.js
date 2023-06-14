import "./project_style.css"

const paragraph = "Lorem ipsum dolor sit amet consectetur. Malesuada egestas varius feugiat ultrices. Sed aenean mattis mollis" +
  " lacinia aliquet arcu.";

function Project() {
  return <div className='project'>
    <div className="page">
      <div className='wrapper'>
        <div className='card'>
          <div className="pAlign">
            <h1>NEVER MISS A DROP</h1>
            <div className="sub">
              <p>
                {paragraph}
              </p>
            </div>
            <button>
              Start Project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Project;