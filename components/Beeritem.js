import Link from 'next/link'

function Beeritem(props) {
  const {beer} = props;
  
  return (
    
      <div className="beer-item">
        <img src={beer.thumbnaiUrl} />
       <Link href={beer.url }>
        <h4>{beer.title}</h4>
       </Link>
      </div>
  );
}
export default Beeritem;
