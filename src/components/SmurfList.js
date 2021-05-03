import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'

 const SmurfList = (props)=> {
    const isLoading = props.loading;
    
    useEffect(()=>{
        props.fetchSmurfs();
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfs.map(data =>(
            <Smurf smurf={data}/>
        ))}
        
    </div>);
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        loading: state.loading
    }
}

const mapDispatchToProps = {fetchSmurfs}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);


//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.