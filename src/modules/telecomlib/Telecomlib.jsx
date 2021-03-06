import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addTab } from '../layout/uilayout-actions';

class TelecomLib extends React.Component{
    static icon = "university";
    static label = "Telecom Library";
    
    constructor(props){
        super(props)
        
        this.addTab = this.addTab.bind(this);
        
    }
    
    addTab = (name) => (e) => { 
        e.preventDefault();
        
        this.props.dispatch(addTab(name, name, {title: name}));
    }
    
    render(){
        return (
        <div>
            <h3><FontAwesomeIcon icon="cog"/> Telecom Library</h3>

            <div className="card">
                <div className="card-body p-3">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className=""><a href="#" className="load-vendors" onClick={this.addTab('Vendors')}><FontAwesomeIcon icon="arrow-right"/> Vendors</a></div>
                        </div>
                        <div className="col-md-6">
                            <div className=""><a href="#" className="load-technologies" onClick={this.addTab('Technologies')}><FontAwesomeIcon icon="arrow-right"/> Technologies</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
}

export default connect()(TelecomLib);