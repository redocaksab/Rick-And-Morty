import React from "react";
import { connect } from 'react-redux';
import { withContainerForPages } from "../hoc/ContainerForPages";
import Locations from './Location';
import { getLocations, setFilter } from './../redux/location-reducer';

let mapStateToProps = (state) => ({
    info: state.locationPage.locations,
    pagesCount: state.locationPage.pageSize,
    currentPage: state.locationPage.currentPage,
    filter: state.locationPage.filter,
    infoForInfo: state.locationPage.residentsForLocation,
})

let connectedEpisodes = connect(mapStateToProps, { getInfo: getLocations, setFilter,})(withContainerForPages(Locations));
export default connectedEpisodes;