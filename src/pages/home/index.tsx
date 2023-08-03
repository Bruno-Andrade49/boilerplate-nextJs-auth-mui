import { CssBaseline, Container, Box } from '@mui/material';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';


function Home() {


  return (
    <>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Container>
        {/* Conteúdo principal aqui */}
        <Box textAlign={"center"}>
          <h2>Conteúdo principal da aplicação</h2>
        </Box>
      </Container>
    </>
  );
}

export default Home;
