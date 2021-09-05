import React from "react";

export const withContainerForPages = (Component) => {

    class ContainerComponent extends React.Component {
        componentDidMount() {
            this.props.getInfo(1);
        }
        onPageChanged = (pageNumber) => {
            this.props.getInfo(pageNumber, this.props.filter);
        }
        componentDidUpdate(prevProps) {
            if(this.props.filter != prevProps.filter) {
                this.props.getInfo(1, this.props.filter);
            }
        }
        render() {
       
            return <Component
                pagesCount={this.props.pagesCount}
                info={this.props.info}
                onPageChanged={this.onPageChanged}
                setFilter={this.props.setFilter}
                infoForInfo={this.props.infoForInfo}
            />
        }
    }
    return ContainerComponent;
}