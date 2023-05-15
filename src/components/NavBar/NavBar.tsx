import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.webp'
import ColorMoeSwitch from '../ColorMoeSwitch/ColorMoeSwitch';
const NavBar = () => {
    return (
        <div>
            <HStack justifyContent='space-between' padding='10px'>
                <Image src={logo} boxSize='60px'></Image>
                <ColorMoeSwitch></ColorMoeSwitch>
            </HStack>
        </div>
    );
};

export default NavBar;
