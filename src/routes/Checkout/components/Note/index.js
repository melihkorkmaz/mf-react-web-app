import React from 'react';

const Note = ({note, onNoteChange}) => {
    return (
        <div className="card note-panel">
            <div className="card-header">
                <i aria-hidden="true" className="fa fa-sticky-note-o"></i> Note
        </div>
            <div className="card-body" style={{padding: "10px"}}>
                <textarea placeholder="You can add notes about your order..." className="form-control" style={{height: "85px"}} value={note} onChange={onNoteChange}></textarea>
            </div>
        </div>
    )
}

export default Note;