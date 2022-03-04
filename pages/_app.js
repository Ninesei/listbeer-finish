import '../styles/globals.css'
import '../components/index.css'
import '../components/Beerpost'
import '../components/indexHead.css'
import '../components/BeerSearch.css'
import '../components/Beeritem'
import '../components/BeerRandom'
import './Random'

function MyApp({ Component, pageProps }) {
  return (
  <Component {...pageProps} />
  );
}

export default MyApp


