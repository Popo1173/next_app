import { creatStore, applyMiddleware } from 'redux';
import thunkMiddleweare from 'redux-thunk';

//ステートの初期化
const initial = {
    message: 'START',
    count: 0
}

//レデューサーを関数で用意
function counterReducer (state = initial, action) {
    //アクションタイプの値をチェックして分岐
    switch (action.type) {
        case 'INCREMENT':
            return{
                message: 'INCREMENT', 
                count: state.count + 1
            };
        case 'DECREMENT':
            return{
                message: 'DECREMENT',
                count: state.count -1
            };
        case 'RESET':
            return{
                message: 'RESET',
                count: initial.count
            };
        default:
            return state
    }
}

//initStore関数（redux-store.jsで必要）
//redux-store.js のstore.jsにあるinitStoreを呼び出しているので記載
//createSoreを関数の形にしてエクスポートしているだけ
export function initStore(store = initial) {
    return createStore(counterReducer, state, applyMiddleware(thunkMiddleweare))
}