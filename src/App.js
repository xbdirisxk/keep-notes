import Navbar from './components/Nav';
import GlobalStyle from './components/styles/Global';
import Container from './components/styles/Container.styled';
import SideBar from './components/SideBar';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Container>
                <SideBar />
            </Container>
        </>
    );
};

export default App;
