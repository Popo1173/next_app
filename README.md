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

