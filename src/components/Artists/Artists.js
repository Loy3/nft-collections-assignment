import "./artists_style.css"

const artistsArr = [
  {
    id: 0,
    artImg: "1.png",
    artName: "Sarah",

  },

  {
    id: 1,
    artImg: "2.png",
    artName: "Charlotte",

  },
  {
    id: 2,
    artImg: "3.png",
    artName: "Olivia",

  },
  {
    id: 3,
    artImg: "4.png",
    artName: "Corey ",

  },
  {
    id: 4,
    artImg: "5.png",
    artName: "Amelia",

  },
  {
    id: 5,
    artImg: "6.png",
    artName: "Alice ",

  },
  {
    id: 6,
    artImg: "7.png",
    artName: "@Jack",

  },
  {
    id: 7,
    artImg: "8.png",
    artName: "@Mia",

  },
  {
    id: 8,
    artImg: "9.png",
    artName: "@Emma",

  },
  {
    id: 9,
    artImg: "10.png",
    artName: "@Ben",

  },

]


function Artists() {

  const artArr = artistsArr.map(art =>
    <div className='column' key={art.id}>
      <div className='card'>
      <div className='bg'>
        <div className='cardIno'>
          <img src={require(`../../assets/Port/${art.artImg}`)} alt='Logo'  />
          <h3>{art.artName}</h3>
          <p>
            Total sale 12.29ETH
          </p>
        </div>
        </div>
      </div>
    </div>
  );

  return <div className='artists'>
    <div className="page">
    <h1>
      TOP ARTIST
    </h1>

    <div className='sub'>
      <p>
        Lorem ipsum dolor sit amet consectetur. laculis nisl purus et id pellentesque risus in lacus. At suscipit onsectetur.
        Tortor non id arcu orci id.
      </p>
    </div>
    <div className='row'>
      {artArr}
    </div>
    </div>

  </div>


}

export default Artists;