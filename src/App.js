import React, { Component } from 'react';
import ParticipantsList from './Components/ParticipantsList'

class App extends Component {
  static defaultProps = {
    store: {
      participants: []
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <div className='List'>
            <ParticipantsList 
            participants={store.participants}
            />        
        </div>
        
        <div className='Stage'></div>
        
      </main>
    );
  }
}



  


export default App;