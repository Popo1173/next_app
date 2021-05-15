import { Component } from 'react';
import { initStore } from '../store';

const isServer = typeof window === 'undefined'
const _NRS_ = '__NEXT_REDUX__STORE__'

//Storeを作成する
function getOrCreateStore (initialState) {
    if(isServer) {
        return initStore(initialState)
    }

    if(!window[__NRS__]) {
        window[__NRS__] = initStore(initialState)
    }
    return window[__NRS__]
}

export default (App) => {
    
    return class AppWithRedux extends Component {
        static async getInitialProps (appContex) {
            const reduxStore =  getOrCreateStore()
            appContex.ctx.reduxStore = reduxStore
            let appProps = {}
            if(typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps(appContex)
            }
            return {
                ...appProps,
                initialReduxState: reduxStore.getState()
            }
        }
        constructor(props){
            super(props)
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }

        render(){
            return (<App {...this.props}
                reduxStore={this.reduxStore} />
            )
        }
    }
}
