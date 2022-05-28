import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button
      onClick={onClick}
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.7 }}
    >
      {children}
    </Button>
  );
});