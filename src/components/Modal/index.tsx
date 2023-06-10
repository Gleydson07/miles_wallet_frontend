
import { Dispatch, ReactNode, SetStateAction } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  Flex
} from './styles';
import Button from '../Button';

interface ModalProps {
  content: ReactNode;
  isOpen: boolean;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  textConfirmButton?: string;
  textCancelButton?: string;
  onClickConfirmButton?: () => void;
  onClickCancelButton?: () => void;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({
  content,
  isOpen,
  showConfirmButton,
  showCancelButton,
  textConfirmButton,
  textCancelButton,
  onClickConfirmButton,
  onClickCancelButton,
  onOpenChange
}: ModalProps) => {

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DialogOverlay asChild />
        <DialogContent >
          {content}
          {(showCancelButton || showConfirmButton) && (
            <Flex>
              {showCancelButton &&
                <Dialog.Close  asChild>
                  <Button
                    title={textCancelButton || 'Cancel'}
                    variant="default"
                    width="96px"
                    onClick={onClickCancelButton}
                  />
                </Dialog.Close >
              }
              {showConfirmButton &&
                <Dialog.Close asChild>
                  <Button
                    title={textConfirmButton || 'Confirm'}
                    variant="confirm"
                    width="96px"
                    margin={textCancelButton ? '0 0 0 16px' : '0'}
                    onClick={onClickConfirmButton}
                  />
                </Dialog.Close>
              }
            </Flex>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
};