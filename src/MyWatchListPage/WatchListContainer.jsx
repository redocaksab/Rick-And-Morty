import React from "react";
import { connect } from 'react-redux';
import WatchList from "./WatchList";
import {setWatchList, deleteWatchItem, setCheckBox} from "./../redux/myWatchList-reducer";

let mapStateToProps = (state) => ({
   watchList: state.watchListPage.watchList, 
})

 
export default connect(mapStateToProps, {setWatchList, deleteWatchItem, setCheckBox})(WatchList);