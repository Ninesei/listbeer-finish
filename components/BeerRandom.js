import Link from 'next/link'

function BeerRandom(props) {
  const {beer} = props;
  
  return (
    
      <div className="beer-item">
       <Link href="Random" >
           <button>
           <p>Random</p>
           </button>
       </Link>
      </div>
  );
}
export default BeerRandom;
