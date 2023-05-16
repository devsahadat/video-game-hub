import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Game } from "../../hooks/useGames";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatFormIconList = ({ platforms }: Props) => {

    const iconMap:{[key:string]:IconType} = {
        mac: FaApple,
        android:FaAndroid,
        ios: MdPhoneIphone,
        web:BsGlobe,
        Linux:FaLinux,
        pc: FaWindows,
        nintendo: SiNintendo,
        xbox:FaXbox,
        playstation: FaPlaystation,
    }
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
