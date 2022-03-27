import data from './Data.js';

const Songs = ({imgUrl, name, artistName}) => (
    <div className="card">
        <img src={imgUrl} alt="song-img" />
        <div className='info'>
          <h1>{name}</h1>
          <p>{artistName}</p>
        </div>
        <button>Select</button>
    </div>
);

const Song = () => {
    return data.map(
        (e) => (
            <Songs 
                imgUrl={e.album.images[0].url}
                name={e.name}
                artistName={e.album.artists[0].name}
            />
        )
    );
};

export default Song;