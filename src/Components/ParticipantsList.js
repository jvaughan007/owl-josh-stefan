import React from 'react';
import Participants from './Participants';

function ParticipantsList(props) {
    return (
        <div class='Participants-list'>
            {props.participants.map((participant) =>
            <Participants 
            key={participant.id}
            avatar={participant.avatar}
            name={participant.name}
            inSession={participant.inSession}
            onStage={participant.onStage}
            />
            )}
        </div>
    )
}

export default ParticipantsList;