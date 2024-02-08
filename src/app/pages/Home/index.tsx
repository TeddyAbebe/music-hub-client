import Box from "../../../styles/Box";
import Flex from "../../../styles/Flex";
import AddMusic from "../../components/AddMusic";
import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import Statistics from "../../components/Statistics";

function Home() {
  return (
    <>
      <Header />
      <AddMusic />
      <Flex
        alignItems="center"
        justifyContent="space-around"
        flexDirection="row"
      >
        <MusicList />
        <Box width="30%" bgColor="#FAEBD7" alignItems="start">
          <Statistics />
        </Box>
      </Flex>
    </>
  );
}

export default Home;
