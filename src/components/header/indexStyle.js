import { makeStyles, styled } from "@material-ui/core/styles";
const useStylesIndex = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 3,
    backgroundColor: "#d22129",
    borderColor: "#d22129",
  },
  sign_out: {
    backgroundColor: "#ffffff",
    color: "#333533",
    fontSize: "10px",
    height: "25px",
    "&:hover": {
      color: "#d22129",
      backgroundColor: "white",
    }
  },
  icon: {
    fontSize: "20px",
    color: "white",
    width: "20px",
    margin: "auto",
    border: "1px solid pink",
  },
  chatNotificationContainer: {
    display: "flex",
    padding: "20px 0px 0px 0px",
    width: "25%",
    justifyContent: "flex-end",
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: "center",
      padding: "20px 0px 12px 0px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "20px 0px 0px 0px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "20px 0px 0px 0px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "20px 0px 0px 0px",

    },

  },
  notificationMailIcon: {
    color: "#fff",
  },
  searchBarDiv: {
    position: "relative",
    width: "50%",
    display: "block",
    justifyContent: "center",
    padding: "17px 120px 0px 120px",
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "13px 0px 0px 0px",
      width: "50%",
      "& .css-piqts5-MuiInputBase-root": {
        marginLeft: "0px"
      }
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "13px 40px 0px 40px",
      width: "50%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "13px 60px 0px 60px",
      width: "50%",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "17px 120px 0px 120px",
      width: "50%",
    },
  },
  searchBar: {
    padding: "0 15px",
    width: "480px",
    height: "40px",
    backgroundColor: "#ffffff",
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
      height: "40px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "100%",
      height: "40px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: "100%",
      height: "40px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "480px",
      height: "40px",
    },
    boxShadow: "  0 3px 10px rgb(0 0 0 / 0.2)",
    borderTopLeftRadius: (props) => (props.searchResult.length > 0 ? "5px" : "5px"),
    borderTopRightRadius: (props) => (props.searchResult.length > 0 ? "5px" : "5px"),
    borderBottomLeftRadius: (props) => (
      props.searchResult.length > 0
        || props.searchLoading ? "0px" : "5px"),
    borderBottomRightRadius: (props) => (
      props.searchResult.length > 0
        || props.searchLoading ? "0px" : "5px"),
    "& .css-yz9k0d-MuiInputBase-input": {
      fontFamily: "Montserrat, sans-se",
      fontSize: "16px"
    }
  },
  headerThirdContainer: {
    justifyContent: "flex-start",
    width: "30%",
    padding: "0px 15px 0px 15px",
    height: "auto",
    display: "flex",
    gap: "5px",
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "0px 15px 0px 15px",

    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "0px 15px 0px 15px",

    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "0px 15px 0px 15px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "0px 15px 0px 15px",
    },
  },
  homeIconMainContainer: {
    // border:"1px solid #fff",
    width: "20%",
    display: "flex",
    justifyContent: "flex-start",
    padding: "4px 20px 0px 20px",
    [theme.breakpoints.between('sm', 'md')]: {
      width: "20%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "20%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "8px 20px 0px 20px",
      width: "20%",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "4px 20px 0px 20px",
      width: "20%",
    },
  },

  cartContainer: {
    display: "flex",
    justifyContent: "start",
    width: "15%",
    padding: "13px 5px 0px 0px",
    '&:hover .cartButton': {
      backgroundColor: 'transparent', // Set the hover background color to transparent
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "20px 0px 0px 0px",
      justifyContent: "center",
      width: "15%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "13px 0px 0px 0px",
      width: "15%",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "13px 0px 0px 0px",
      width: "15%",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "13px 5px 0px 0px",
      width: "15%",
    },
  },
  profile: {
    width: "19%",
    padding: "12px 12px 0px 12px",
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "12px 5px 0px 0px",
      width: "24%"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "12px 5px 0px 0px",
      width: "19%"
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "12px 5px 0px 0px",
      width: "19%"
    },
    [theme.breakpoints.up('xl')]: {
      padding: "12px 12px 0px 12px",
      width: "19%"
    },
  },
  userName: {
    width: "35%",
    padding: "22px 5px 0px 0px",
    whiteSpace: 'nowrap',
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "22px 0px 0px 3px",
      width: "fit-content",
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "22px 0px 0px 3px",
      width: "35%",
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "22px 0px 0px 15px",
      width: "35%",
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundColor: 'transparent',
      padding: "22px 5px 0px 0px",
      width: "35%",
      whiteSpace: 'nowrap',

    },
  },
  userNameText: {
    fontFamily: "Montserrat, sans-se",
    fontSize: "18px",
    color: "#fff",
    fontWeight: 500,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: "12px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "12px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "18px",

    },
  },
 
}));

export { useStylesIndex }