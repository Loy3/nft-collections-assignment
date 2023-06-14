import "./header_style.css";
import port1 from "../../assets/Port/1.png";
import port2 from "../../assets/Port/2.png";
import port3 from "../../assets/Port/3.png";

import arrow from "../../assets/Icons/Arrow.png";

const paragraph = "A Good NFT Project Will Have A Healthy Community Following Them. The Ones With The Most Engagement" +
  "Are Usually The Projects Which Will Be The Most Successful. NFTs Are More Than Just Owning A Piece Of Art," +
  "They Are Being Part Of A Community, Where A Culture Has Been Created, And Culture Creates A Following";

const logosArr = [
  {
    id: 0,
    link: "1.png"
  },
  {
    id: 1,
    link: "2.png"
  },
  {
    id: 2,
    link: "3.png"
  },
  {
    id: 3,
    link: "4.png"
  },
  {
    id: 4,
    link: "5.png"
  }

]

function Header() {

  const logo = logosArr.map(log =>
    <div className='column' id='brLogo' key={log.id}>
      <img src={require(`../../assets/Icons/${log.link}`)} alt='Logo' />
    </div>
  )

  return <header>
    <div>
      <div className='wrapper'>
        <div className='row'>
          <div className='column1'>

            <h1>DISCOVER AN AMAZING
              <br />NFT COLLECTION
            </h1>

            <p>
              {paragraph}
            </p>

            <div className='search'>
              <input type="text" placeholder='What You Want Looking For '></input>
              <button>Search</button>
            </div>

            <div className='ratings'>
              <div className='row'>
                <div className='column'>
                  <table>
                    <tbody>
                      <tr>
                        <td className='rate'>320+</td>
                        <td className='rText'>
                          Project
                          <br /> Done
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='column'>
                  <table>
                    <tbody>
                      <tr>
                        <td className='rate'>60+</td>
                        <td className='rText'>
                          Creative
                          <br />People
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='column'>
                  <table>
                    <tbody>
                      <tr>
                        <td className='rate'>200+</td>
                        <td className='rText'>
                          Happy
                          <br />Client
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='cT'>
              <table>
                <tbody>
                  <tr>
                    <td className='cr'>
                      <h2>CREATIVE BY</h2>
                    </td>
                    <td>
                      <div className='teamImg'>
                        <img src={port1} alt='Logo' className='img1' />
                        <img src={port2} alt='Logo' className='img2' />
                        <img src={port3} alt='Logo' className='img3' />

                      </div>
                    </td>
                    <td>
                      <a href='/'>
                        View Team
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          <div className='column2'>
            <div className='headImg'>
              <div className='border1'>
                <img src={require('../../assets/NFT/1.png')} className='headImg1' alt='Logo' />
              </div>

              <div className='border2'>
                <img src={require('../../assets/NFT/2.png')} className='headImg2' alt='Logo' />
              </div>
            </div>
            <br />
            <div className="explore">
              <img src={arrow} alt='Logo' />
              <button className=''>Explore</button>
            </div>
          </div>
        </div >
      </div>
      <div className='spons'>
        <div className='row'>
          {logo}

        </div>
      </div>
    </div>

  </header >

}

export default Header;


/*

<div className='column'>
          <img src={require('../../assets/Icons/1.png')} alt='Logo' width={150} />
        </div>

        <div className='column'>
          <img src={require('../../assets/Icons/2.png')} alt='Logo' width={150} />
        </div>

        <div className='column'>
          <img src={require('../../assets/Icons/3.png')} alt='Logo' width={150} />
        </div>

        <div className='column'>
          <img src={require('../../assets/Icons/4.png')} alt='Logo' width={150} />
        </div>

        <div className='column'>
          <img src={require('../../assets/Icons/5.png')} alt='Logo' width={150} />
        </div>

        */