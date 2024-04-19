import { Modal } from 'rsuite';
import 'rsuite/Modal/styles/index.css'
import Form from './Form';

type ModalProps = {
  open: boolean,
  onClose: () => void
}

const ModalComponent = ({ open, onClose, }: ModalProps) => {

  return (
    <Modal open={open} onClose={onClose} onBlur={onClose}>

      <Form formType='POST' closeModal={onClose} />

      <button onClick={onClose}>Close/</button>
    </Modal>
  )
}

export default ModalComponent
