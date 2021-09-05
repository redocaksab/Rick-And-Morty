import React from "react";
import { connect } from 'react-redux';
import { withContainerForPages } from "../hoc/ContainerForPages";
import {  getEpisodes, setFilter } from './../redux/episodes-reducer';
import Episodes from "./Episodes";

let mapStateToProps = (state) => ({
    info: state.episodesPage.episodes,
    pagesCount: state.episodesPage.pageSize,
    currentPage: state.episodesPage.currentPage,
    filter: state.episodesPage.filter,
    infoForInfo: state.episodesPage.charactersForEpisode,
})

let connectedEpisodes = connect(mapStateToProps, { getInfo: getEpisodes, setFilter,})(withContainerForPages(Episodes));
export default connectedEpisodes;