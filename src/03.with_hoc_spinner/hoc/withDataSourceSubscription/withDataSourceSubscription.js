import React from 'react';
import DataSource from '../../../data/DataSource';
export default function withDataSourceSubscription (WrappedComponent,selectData) {
    class EnhancedComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                data: null,
            }
        }
        async componentDidMount(){
            const response = await selectData(DataSource, this.props);
            this.setState({data: response});
        }
        render(){
            return(
                <WrappedComponent data={this.state.data}/>
            );
        }
    }

    // The container components created by HOCs show up in developer tools, so its a good idea to wrap the display name of the wrapped component. 
    EnhancedComponent.displayName = `WithDataSourceSubscription(${getDisplayName(WrappedComponent)})`;
    return EnhancedComponent;
}

function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
