import Banner from '../components/Banner'
import Search from '../components/Search/Search'
import HouseList from '../components/Houses/HouseList';
import { AuthProvider } from '../context/AuthContext';
import { AuctionBody } from '../components/auctions/Body';

const Home = () => {
  return (
    <>
      <Banner />
      
      <Search />
      <HouseList />
      <AuthProvider>
        <AuctionBody/>
      </AuthProvider>
    </>
  )
}

export default Home;