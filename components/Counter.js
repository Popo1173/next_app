import React, { Component } from 'react';

export default class Counter extends Component {
    msgStyle = {
        fontSize: "16pt",
        backgroundColor: "#eef",
        padding: "5px"
    }

    constructor(props){
        super(props);
        //Stateの初期値
        this.state = {
            counter: 0,
            msg: 'counterInit: 0'
        };
        //thisでdoActuion関数を影響しないためbindする
        this.doAction = this.doAction.bind(this);
    }

    doAction(){
        //doAction発火したらsetStateで更新
        this.setState((state)=>{
            const num = state.counter + 1;
            return({
                counter: num,
                msg: "count: " + num
            });
        });
    }

    render(){
        return (
            <p onClick={this.doAction} style={this.msgStyle}>
                {this.state.msg}
            </p>)
    }
}