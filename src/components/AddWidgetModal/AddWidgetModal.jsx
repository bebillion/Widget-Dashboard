import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './AddWidgetModal.css'
import PropTypes from 'prop-types';
import { useState } from 'react';


const AddWidgetModal = ({isOpen, onClose, onAddWidget}) => {

  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  
  const handleAdd = () => {
    const newWidget = {
      id: Math.floor(Math.random() * 1000), // Random ID for now
      name: widgetName,
      content: widgetContent,
    }
    onAddWidget(newWidget);
    setWidgetName('');
    setWidgetContent('');
  }

  return (
    <div>
      <Modal open={isOpen} onClose={onClose}
      aria-labelledby="add-widget-modal-title"
      aria-describedby="add-widget-modal-description"
      >
        <div className='modal-content'>
          <h2>Add Widget</h2>
          <TextField
           label="Widget Name"
           fullWidth
           value={widgetName}
           onChange={(e)=> setWidgetName(e.target.value)}
          />
          <TextField
            label="Widget Content"
            fullWidth
            multiline
            value={widgetContent}
            onChange={(e) => setWidgetContent(e.target.value)}
          />
          <Button variant='contained' color='primary' onClick={handleAdd}>
            Add
          </Button>
        </div>
      </Modal>
    </div>
  )
}

AddWidgetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddWidget: PropTypes.func.isRequired,
};

export default AddWidgetModal
