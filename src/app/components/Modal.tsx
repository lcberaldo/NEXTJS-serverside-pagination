import { Modal } from 'rsuite';
import 'rsuite/Modal/styles/index.css'
import Form from './Form';

type ModalProps = {
  open: boolean,
  onClose: () => void
}

const ModalComponent = ({ open, onClose, }: ModalProps) => {

  return (
    <Modal open={open} onClose={onClose}>

      <Form formType='post' closeModal={onClose} />

      <button onClick={onClose}>Close/</button>
    </Modal>
  )
}

export default ModalComponent
