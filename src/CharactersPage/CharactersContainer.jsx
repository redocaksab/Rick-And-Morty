import React from "react";
import { connect } from 'react-redux';
import { withContainerForPages } from "../hoc/ContainerForPages";
import { getCharacters, setFilter } from './../redux/character-reducer';
import Characters from "./Characters";

let mapStateToProps = (state) => ({
    info: state.characterPage.characters,
    pagesCount: state.characterPage.pageSize,
    currentPage: state.characterPage.currentPage,
    filter: state.characterPage.filter,
})

let connectedCharacter = connect(mapStateToProps, { getInfo: getCharacters, setFilter })(withContainerForPages(Characters));
export default connectedCharacter;