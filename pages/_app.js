import App, { Container } from 'next/app';
import React, { Component } from 'react';
import withReduxStore from '../lib/redux-store';
import { Provider } from 'redux-store';

class _App extends Component {
    render(){
        const {Component, pageProps, reduxStore } = this.props
        return(
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}
// withReduxStore関数を実行して_APPをエクスポート
export default withReduxStore(_App)