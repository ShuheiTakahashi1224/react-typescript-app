import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { User } from "../../../types/api/User";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  organaizerFlg?: boolean;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user, organaizerFlg = false } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={10}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="name">名前</FormLabel>
              <Input
                id="name"
                type="text"
                value={user?.name}
                isReadOnly={!organaizerFlg}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">MAIL</FormLabel>
              <Input
                id="email"
                type="text"
                value={user?.email}
                isReadOnly={!organaizerFlg}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone">TELL</FormLabel>
              <Input
                id="phone"
                type="text"
                value={user?.phone}
                isReadOnly={!organaizerFlg}
              />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
