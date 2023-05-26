import './footer_style.css';

import Facebook from "../../assets/Socials/facebook.svg";
import Instagram from "../../assets/Socials/instagram.svg";
import Twitter from "../../assets/Socials/twitter.svg";

const paragraph = "NFTFY makes it easy for you to create a real NFT on the blockchain straight from your iPhone in a few taps!" +
  "No coding experience needed!";

function Footer() {

  return (

    <footer>
      <div className='row'>
        <div className='column1'>
          <h1>Entry</h1>
        </div>
        <div className='column2'>
          <div className='row'>
            <div className='column'>
              Explore
            </div>
            <div className='column'>
              Help Center
            </div>
            <div className='column'>
              Become a patner
            </div>
            <div className='column'>
              Job
            </div>
          </div>
        </div>

      </div>

      <div className='row'>
        <div className='column'>
          <p>
            {paragraph}
          </p>
        </div>
        <div className='column'>
          <div className='socials'>
            <table>
              <tbody>
                <tr>

                  <td><img src={Facebook} alt='Socials'  /></td>
                  <td><img src={Instagram} alt='Socials'  /></td>
                  <td><img src={Twitter} alt='Socials'  /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <hr />
      <div className='lastSect'>
        <div className='row'>
          <div className='column'>
            Privacy policy
          </div>

          <div className='column' id='copy'>
            Copyright@Nft Creative agency
          </div>

          <div className='column' id='team'>
            Team of service
          </div>
        </div>
      </div>
    </footer>



  );
}

export default Footer;