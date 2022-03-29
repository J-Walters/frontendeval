const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className='modal' onClick={props.onClose}>
      {/* allow outside click to close only so we need to prevent for inside click */}
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>Modal title</h4>
        </div>
        <div className='modal-body'>this is modal content</div>
        <div className='modal-footer'>
          <button classNmae='button' onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
