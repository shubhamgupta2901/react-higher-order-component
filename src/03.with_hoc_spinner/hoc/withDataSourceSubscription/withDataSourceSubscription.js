import React from 'react';
import DataSource from '../../../data/DataSource';
import Modal from '../../Modal/Modal';
import Spinner from '../../Spinner/Spinner'; 
export default function withDataSourceSubscription (WrappedComponent,selectData) {
    class EnhancedComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                data: null,
                loading:true,
            }
        }
        async componentDidMount(){
            const response = await selectData(DataSource, this.props);
            setTimeout(()=>{
                this.setState({data: response, loading: false});
            },3000)
            
        }
        render(){
            return(
                <React.Fragment>
                    {this.state.loading ? <Modal><Spinner/></Modal> : null}
                    <WrappedComponent data={this.state.data}/>
                </React.Fragment>
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
