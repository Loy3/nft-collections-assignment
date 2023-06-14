import "./journey_style.css";

const cardArr = [
    {
        id: 0,
        icon: "wallet.png",
        title: "Connect Wallet",
        paragraph: "WalletConnect Protocol Does Not Run On A Blockchain And There Are No Fees."
    },

    {
        id: 1,
        icon: "marketplace.png",
        title: " NFT Marketplace",
        paragraph: "An NFT, Or Non-Fungible Token, Is A Unique Token Recorded In A Blockchain Ownership Of A Digital Or Physical Asset."
    },

    {
        id: 2,
        icon: "collection.png",
        title: "Collect NFT",
        paragraph: " NFTS Or Non-Fungible Tokens Are Digital Assets Based On Blockchain Technology."
    }
]



function Journey() {

    const card = cardArr.map(ca =>
        <div className='column' key={ca.id}>
            <div className='card'>
                <div className='bg'>
                    <div className='wrap'>

                        <img src={require(`../../assets/Icons/${ca.icon}`)} alt='Icon' width={70} />
                        <br />
                        <h2>
                            {ca.title}
                        </h2>
                        <p>
                            {ca.paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );


    return <div className='journey'>
        <div className="page">
            <h1>
                YOUR JOURNEY START HERE
            </h1>
            <div className='sub'>
                <p >
                    Lorem ipsum dolor sit amet consectetur. laculis nisl purus et id pellentesque risus in lacus.
                    At suscipit onsectetur. Tortor non id arcu orci id.
                </p>
            </div>

            <div className='row'>
                {card}
            </div>
        </div>
    </div>
}


export default Journey;



/*
<div className='column'>
                <div className='card'>
                    <div className='bg'>
                        <div className='wrap'>
                            <img src={require('../../assets/Icons/wallet.png')} alt='Icon' width={50} />
                            <br />
                            <h2>
                                Connect Wallet
                            </h2>
                            <p>
                                WalletConnect Protocol Does Not Run On A Blockchain And There Are No Fees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='bg'>
                        <div className='wrap'>
                            <img src={require('../../assets/Icons/marketplace.png')} alt='Icon' width={50} />
                            <br />
                            <h2>
                                NFT Marketplace
                            </h2>
                            <p>
                                An NFT, Or Non-Fungible Token, Is A Unique Token Recorded In A Blockchain Ownership Of A Digital Or
                                Physical Asset.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='bg'>
                        <div className='wrap'>
                            <img src={require('../../assets/Icons/collection.png')} alt='Icon' width={50} />
                            <br />
                            <h2>
                                Collect NFT
                            </h2>
                            <p>
                                NFTS Or Non-Fungible Tokens Are Digital Assets Based On Blockchain Technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            */