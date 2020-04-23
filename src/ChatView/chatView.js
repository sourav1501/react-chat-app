import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
const firebase = require("firebase");

class ChatViewComponent extends React.Component {

  componentDidMount = () => {
    const container = document.getElementById('chatview-container');
    if(container)
      container.scrollTo(0, container.scrollHeight);
  }
  componentDidUpdate = () => {
    const container = document.getElementById('chatview-container');
    if(container)
      container.scrollTo(0, container.scrollHeight);
  }
 
 

  render() {

    const { classes } = this.props;

    if(this.props.chat === undefined) {
      return(<main className={classes.content}></main>);
    } else if(this.props.chat !== undefined) {
      return(
        <div>
          <div className={classes.chatHeader}>
            Your conversation with {this.props.chat.users.filter(_usr => _usr !== this.props.user)[0]}
            <button onClick={this.props.delete } className={classes.delete}>Delete Entire Chat</button>
          </div>
         
          <main id='chatview-container' className={classes.content}>
            {
              this.props.chat.messages.map((_msg, _index) => {
                return(
                  
                <div key={_index} id='data-id' className={_msg.sender === this.props.user ? classes.userSent : classes.friendSent}>
                  {_msg.message} 
                                    {this.props.chats.map((_chat, _index) => {
                    if (_chat.receiverHasRead === false) {
                      return <p className={classes.seen}>seen</p>;
                    } else {
                      return <p className={classes.seen}>unseen</p>;
                    }
                  })}

                 
  
                  {/* <button  onClick={(index)=>this.props.itemdel(_index,_msg)}>Remove</button>  */}

                </div>
                
                )
              })
            }
          </main>
        </div>
      );
    } else {
      return (<div className='chatview-container'>Loading...</div>);
    }
  }
}

export default withStyles(styles)(ChatViewComponent);