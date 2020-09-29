import React from 'react';

function Participants(props) {
    let status = ''

    if (props.inSession) {
        if (props.onStage) {
            status = 'On Stage'
        } else {status = 'In Session'}
    } else {status = 'Left Session';}

    return (
            <div className="session-participant">
                <img className='user-avatar' src={props.avatar} alt='avatar'></img>
                <div className='participant-info'>
                   <h6 className='participant-name'>{props.name}</h6>
    <div className={`participant-status ${props.inSession?'participant-status__green':'participant-status__gray'}`}>{status}</div>
                </div>
            </div>
        
    
    )
}

export default Participants;