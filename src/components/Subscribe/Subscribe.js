import "./subscribe_style.css";
import right from "../../assets/Icons/right.png";

function Subscribe() {
  return <div className='subscribe'>
    <div className="page">
      <div className='row'>
        <div className='column1'>
          <h1>SUBSCRIBE OUR LATEST
            <br />NEWSLETTERS
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Malesuada egestas varius feugiat ultrices. Sed aenean mattis mollis
            lacinia aliquet arcu. Vulputate fermentum eget nulla facilisi. Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className='subsc'>
            <input defaultValue={"Enter your email"} />
            <button><img src={right} alt='Icon' width={15} /></button>
          </div>

        </div>

        <div className='column2'>
          <div className='subsImg'>
            <div className='bord1'>
              <img src={require('../../assets/NFT/13.png')} className='subsImg1' alt='Logo' />
            </div>
            <div className='bord2'>
              <img src={require('../../assets/NFT/14.png')} className='subsImg2' alt='Logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Subscribe;