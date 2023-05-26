import "./navbar_style.css"

function Navbar() {
    return <nav>
        <div className='nav-wrap'>

            <div className="topnav" id="myTopnav">
                <div className="row">
                    <div className='column1'>
                        <div className="topnav-left">
                            <a href="!#" id="logo">Entry</a>
                        </div>
                    </div>
                    <div className='column3'>
                        <div className="topnav-right">
                            <button>Sign Up</button>
                        </div>
                    </div>
                    <div className='column2'>
                        <div className="topnav-center" id="topnav-center" align="center">
                            <a href='!#'>Home</a>
                            <a href='!#'>Features</a>
                            <a href='!#'>Resource</a>
                            <a href='!#'>Company</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </nav >
}

export default Navbar;


/*

            <div className='cT'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      CREATIVE BY
                    </td>
                    <td>
                      <div className='tImg'>
                        <img src='./assets/Port/1.png' alt='Logo' width={50} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>*/