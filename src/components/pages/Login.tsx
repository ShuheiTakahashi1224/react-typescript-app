import { Box, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" px={4} boxShadow="md" borderRadius="md">
        <Heading
          as="h1"
          py={3}
          borderBottom={"1px solid"}
          borderColor={"gray.200"}
          size="lg"
          textAlign="center"
        >
          ユーザ管理アプリ
        </Heading>
        <Stack spacing={3} py={8} px={5}>
          <Input placeholder="ユーザID" />
          <PrimaryButton onClick={alert}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
