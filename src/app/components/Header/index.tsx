import Text from "../../../styles/Text";
import { IHeader } from "./types";

const Header: React.FC<IHeader> = () => {
  return (
    <div>
      <Text fontSize="2rem" textAlign="center" marginBottom="2rem">
        Music Hub
      </Text>
    </div>
  );
};

export default Header;
