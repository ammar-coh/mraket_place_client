import { makeStyles, styled } from "@material-ui/core/styles";

const useStylesChatNotification = makeStyles((theme)=>({
    root: {
        [theme.breakpoints.between('md','lg')]: {
          width:"100%"
        },
        [theme.breakpoints.between('lg','xl')]: {
          width:"100%"
        },
        [theme.breakpoints.up('xl')]: {
          width:"100%",
       padding:"0px 0px 0px 40px"
        },
    },
    chatNotification: {},
    notificationMailIcon: {
      color: "#fff",
      fontSize: "120px"
    },
    notification_badge: {
      width: "100%",
    },
    notification_list: {
      position: "absolute",
      zIndex: 9999,
      width: "19%",
      "& .css-h4y409-MuiList-root": { display: "grid", },
    },
    button: {
      width: "100%",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "rgb (247 ,249 249)",
        color: "#333533"
      },
      "& .css-10hburv-MuiTypography-root": {
        fontSize: "15px",
        fontWeight: 700,
        fontFamily: "Montserrat, sans-se",
      },
      "& .css-1phucj-MuiTypography-root": {
        fontSize: "15px",
        fontFamily: "Montserrat, sans-se",
        color: "#536471",
      }
    },
    button_1: {
      justifyContent: 'end',
      padding: "4px 0px",
      '&:hover': {
        backgroundColor: 'transparent', // Set the hover background color to transparent
      },
      [theme.breakpoints.between('md','lg')]: {
        minWidth:"100%",
        justifyContent:"center"
      },
      [theme.breakpoints.between('lg','xl')]: {
        justifyContent: 'center',
      },
      [theme.breakpoints.up('xl')]: {
        justifyContent: 'end',
      },
    }
  }));
  export {useStylesChatNotification}