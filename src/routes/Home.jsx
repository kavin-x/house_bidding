import Banner from '../components/Banner'
import Search from '../components/Search/Search'
import HouseList from '../components/Houses/HouseList';
import { AuthProvider } from '../context/AuthContext';
import { AuctionBody } from '../components/auctions/Body';
import Header from '../components/header/Header';

const Home = () => {
  return (
    <>
      <Header/>
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