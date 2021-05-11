# next_app

# package.json作成
```
{
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start",
        "export": "next export"
    }
}
```

# npm install
```
npm install --save next react react-dom
```

# 構成
PJ  
└node_modules  
└pages  
└package.json  
└next.confing.js  
└index.js  

# index.js 作成
別ファイルになどに記述しているスクリプトを外部で利用したいものを設定<br>
（）=> 関数を外部で利用するもの<br>
```
export defult ()=><div></div>
```

# 「pages」フォルダでページを用意する
このフォルダの中にページ表示のためのスクリプトファイルを配置し、表示する<br>
JSXを使ってページを表示するため、HTMLファイルは利用しない。<br>

# エクスポート
作成したファイルを静的ファイルとして保存する。<br>
next.config.jsを作成  
Next.jsの設定情報を記述するファイル  
```
module.exports =  {
    //exportPathMapという項目を持ったオブジェクトをエクスポート
    //出力するページのマッピングを行う
    exportPathMap: function(){
    　　　//pages内のindex.jsがトップになるよう設定
        '/'; {page: '/'}
    }
}
```

```
//ビルドする
npm run build

//エクスポートする　静的ファイルを書き出す
npm run export
```

# 静的ファイルは動かない
静的ファイルに変換するのはダイナミックな操作をする処理をしないもので利用する。

# スタイル適用
## スタイル直書きスタイルを変数にいれる
```
const h1 = {
    fontSize: '72pt',
    fontWeight: 'bold',
    textAlign: 'right',
    letterSpacing: '-8px',
    color: '#f0f0f0',
    margin: '-40px 0px'
}

const p = {
    margin: '0px',
    color: '#666',
    fontSize: '16pt'
}

export default()=><div>
    <h1 style={h1}>Next.js</h1>
    <p style={p}>Welcome to next.js!</p>
</div>
```

## ビルドインCSS
JSXに埋め込むスタイルシート情報  
普段のスタイルの書き方
```
<style jsx> {`
...スタイル記述...
`}
```
```
export default()=><div>
    <style jsx>
        {`
        h1 {
            font-size: 68pt;
            font-weight: bold;
            text-align: right;
            letter-spacing: -8px;
            color: #f0f0f0;
            margin: -32px 0px;
        }
        p {
            margin: 0px;
            color: #666;
            font-size: 16pt;
        }
        `}
    </style>
    <h1>Next.js</h1>
    <p>Welcome to next.js!</p>
```


