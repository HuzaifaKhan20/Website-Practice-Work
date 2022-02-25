import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]) 
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(()=> {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        // 'https://testnets-api.opensea.io/assets?asset_contract_address=0x54f2195081578b61F24E66aC2bf03AA5C47384C60x54f2195081578b61F24E66aC2bf03AA5C47384C6')
        'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x54f2195081578b61F24E66aC2bf03AA5C47384C6'
        )
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
    }

  return getMyNfts()
  },[])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <Punklist punkListData={punkListData} 
      setSelectedPunk={setSelectedPunk} 
      />
      </>
      )
    }
   </div>
  );
}

export default App;
