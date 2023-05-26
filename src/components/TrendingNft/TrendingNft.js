import "./trending_style.css";

const trendingNftArr = [
    {
        id: 0,
        nft: "3.png",
        time: "3h: 56m:09s",
        title: "Ast Digital Art #19",
        profileImg: "1.png",
        proName: "Sarah Bella"
    },

    {
        id: 1,
        nft: "4.png",
        time: "3h: 56m:09s",
        title: "Ast Digital Art #19",
        profileImg: "4.png",
        proName: "Corey Dlamini"
    },

    {
        id: 2,
        nft: "5.png",
        time: "3h: 56m:09s",
        title: "Ast Digital Art #19",
        profileImg: "6.png",
        proName: "Alice Vine"
    },

    {
        id: 3,
        nft: "6.png",
        time: "3h: 56m:09s",
        title: "Ast Digital Art #19",
        profileImg: "10.png",
        proName: "Ben Jovey"
    },

    {
        id: 4,
        nft: "7.png",
        time: "3h: 56m:09s",
        title: "Ast Digital Art #19",
        profileImg: "4.png",
        proName: "Corey Dlamini"
    },

    {
        id: 5,
        nft: "8.png",
        time: "3h: 56m:09s",
        title: "Ast Digital Art #19",
        profileImg: "10.png",
        proName: "Ben Jovey"
    },

    {
        id: 6,
        nft: "9.png",
        time: "3h: 56m:09s",
        title: "Ast Digital Art #19",
        profileImg: "1.png",
        proName: "Sarah Bella"
    },

    {
        id: 7,
        nft: "10.png",
        time: "3h: 56m:09s",
        title: "Ast Digital Art #19",
        profileImg: "6.png",
        proName: "Alice Vine"
    }
];

function TrendingNft() {

    const nftArr = trendingNftArr.map(tnft =>
        <div className='column' key={tnft.id}>
            <div className='card' id='nft'>
                <div className='nftImg'>
                    <img src={require(`../../assets/NFT/${tnft.nft}`)} alt='NFT' />
                    <div className='nftTime'>{tnft.time}</div>
                </div>
                <div className='nftContent'>

                    <h3>{tnft.title}</h3>

                    <div className='row'>
                        <div className='column' >
                            <div className='left'>
                                Current Bid
                            </div>
                        </div>
                        <div className='column'>
                            <div className='right'>
                                2.3 ETH
                            </div>
                        </div>

                        <div id='profile'>
                            <div className="row" >
                                <div className="lImg">
                                  
                                        <img src={require(`../../assets/Port/${tnft.profileImg}`)} alt='Logo' />
                                    
                                </div>
                                <div className="lText">
                                    {tnft.proName}
                                </div>
                            </div>

                        </div>
                        <div  id="btn">
                            <div className='right'>
                                <button>
                                    Place Bid
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

    return <div className='trending'>
        <h1>
            TRENDING NFT THIS WEEK
        </h1>

        <div className='sub'>
            <p>
                It is illegal to screenshot an NFT and pass it off as your own. It is also illegal to post it online or
                make a physical copy.
            </p>
        </div>

        <div id='categories'>

            <div className='row'>
                <div className='column'>
                    <button className='categories'>All Categories</button>
                </div>
                <div className='column'>
                    <button>Art</button>
                </div>
                <div className='column'>
                    <button>Abstract</button>
                </div>
                <div className='column'>
                    <button>Video</button>
                </div>
                <div className='column'>
                    <button>Game</button>
                </div>
            </div>

        </div>

        <br />
        <br />

        <div className='row'>
            {
                nftArr
            }
        </div>
    </div>

}

export default TrendingNft;