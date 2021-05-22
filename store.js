import { createStore, applyMiddleware } from 'redux';
import thunkMiddleweare from 'redux-thunk';

//ステートの初期化
const initial = {
    message: 'START',
    data: [],
    number:[],
    result: 0
}

function calcReducer(state = initial, action) {
    switch (action.type) {
        //計算実行
        case 'ENTER':
            //slice()で新しい配列を作り、stateに設定する
            let data2 = state.data.slice();
            //入力された値をactionにvalueという名前をつけて変数Sに入れる
            let s = action.value;
            //入力された値を配列に追加
            data2.unshift(s);
            
            //入力された値を数字だけにする（数字以外を全て空のテキストに痴漢）
            let num = s.replace(/[^0-9]/g,"");
            //number2配列を作りstateに設定する
            let number2 = state.number.slice();
            //痴漢した数字をnumber2配列に追加する
            number2.unshift(num);

            //取り出したテキストそれぞれに1をかけておく
            //replaceしたため、テキストどうしを足し算すると判断されるため、resultに1をかけておく
            let result = (state.result * 1) + (num + 1);

            //新しいステートに設定される
            return {
                message: 'ENTER',
                data: data2,
                number: number2,
                result: result
            };
        //リセット
        //入力された値を初期値に戻す
        case 'RESET':
            return {
                message: 'RESET',
                data: [],
                number: [],
                result: 0
                
            };
        //デフォルト
        default:
            return state;
    }
}

//initStore関数
//initStore関数（redux-store.jsで必要）
//redux-store.js のstore.jsにあるinitStoreを呼び出しているので記載
//createSoreを関数の形にしてエクスポートしているだけ
export function initStore(state = initial) {
    return createStore(calcReducer, state, 
        applyMiddleware(thunkMiddleweare))
}