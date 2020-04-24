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
                const timestamp = Date.now();
                return(
                  
                <div key={_index} id='data-id' className={_msg.sender === this.props.user ? classes.userSent : classes.friendSent}>
                  {_msg.message} 
                  <button
                    className={classes.deleteChat}
                    onClick={this.props.onDelete}
                  >
                    X
                  </button>
                                    {this.props.chats.map((_chat, _index) => {
                    if (_chat.receiverHasRead === false) {
                      return <p className={classes.seen}><i class="fas fa-check"></i>

                      </p>;
                    } else {
                      return <p className={classes.unseen}><i class="fas fa-check"></i>

                      </p>;
                    }
                  
                  })}
  <p className={classes.chatDate}>
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    }).format(_msg.timestamp)}
                  </p>
                 
  
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