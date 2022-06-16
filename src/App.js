import Pages from './pages/Pages'
import Category from './components/Category';
import {BrowserRouter, Link} from 'react-router-dom'
import Search from './components/Search';
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Delicious</Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages />
      </BrowserRouter>

    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`


export default App;

// Main API Key:
// f9382f826bc348d19970d8c80e330074

// Extra API Keys: 
// aeb907f09512485aa891bf5b73d5ba18 
// 3ed8ae22d6c2494284190469cabeeb51 