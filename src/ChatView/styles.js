const styles = theme => ({

    content: {
      height: 'calc(100vh - 100px)',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      overflowY: 'scroll',
      top: '50px',
      width: 'calc(100% - 300px)',
      position: 'absolute'
    },
    deleteChat: {
      position: "absolute",
      right: "0",
      top: "0",
      borderRadius: "50%",
      border: "none",
      backgroundColor: "transparent",
      color: "white",
      cursor: "pointer",
    },
    chatDate: {
      marginTop:'-4px',
      fontSize: "10px",
      color: "#ffffff9e",
    },
    userSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#707BC4',
      color: 'white',
      width: '300px',
      borderRadius: '10px',
      position:"relative",
    },
  
    friendSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#707BC4',
      color: 'white',
      width: '300px',
      borderRadius: '10px',
      position:"relative",
    },
  
    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '50px',
      backgroundColor: '#344195',
      position: 'fixed',
      marginLeft: '301px',
      fontSize: '18px',
      textAlign: 'center',
      color: 'white',
      paddingTop: '10px',
      boxSizing: 'border-box',
 
      
    },
    delete:{
      float: 'right',
      marginRight:'30px',
      backgroundColor: '#707BC4',
      outline:'none',
      border:'none',
      padding:'7px 20px',
      fontSize:'0.9em',
      color: 'white',
      borderRadius:'5px'

    },
    seen:{
     textAlign:'right',
    //  marginTop:'10px',
     marginBottom:'0',
     margin:'0',
     marginTop:'6px',

     padding:'0'
    },
    unseen:{
      textAlign:'right',
     //  marginTop:'10px',
      marginTop:'-8px',
      margin:'0',
      padding:'0'
     }
  
  });
  
  export default styles;