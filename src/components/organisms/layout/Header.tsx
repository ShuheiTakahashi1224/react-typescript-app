import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";

import { MenuIconButton } from "../../../components/atoms/button/MenuIconButton";
import { MenuDrawer } from "../../../components/molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justifyContent={{ base: "space-between", md: "flex-start" }}
        padding={{ base: 3, md: 5 }}
      >
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          <Box as="a" _hover={{ cursor: "pointer" }}>
            ユーザ管理アプリ
          </Box>
        </Heading>
        <Flex ml={6} align="center" display={{ base: "none", md: "flex" }}>
          <Box>
            <Link to="">ユーザ一覧</Link>
          </Box>
          <Box ml={3}>
            <Link to="">設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
});
