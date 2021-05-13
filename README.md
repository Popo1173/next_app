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
└components  
　└Counter.js  
└pages  
　└index.js  
　└other.js  
└static  
　└Style.js  
　└Image.js  
  └Image.jpg
└package.json  
└next.confing.js  


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
ReactPJではCSSは利用できたがNEXT.jsではcssファイルは利用できない。  
スクリプトとしてスタイルを持たせて利用することはできる。(複数のコンポーネントやページなどでインポートする)

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

## 外部スタイルシート
ページのように「スタイルのスクリプトファイル」を用意し、それを読み込んで利用する。  
Style.jsファイルを作成し、ページJSにインポートする
```
[Style.js]
書き方は普通のスタイル
export default <style>
    {`
        h1 {
            margin: 10px;
            font-size: 10px
        }
    
    `}
[index.js]
import style from '../hoge/Style'
export defalut ()=> <div>
 {style} → JSX内で出力
 <h1>...</h1>
```

# 複数ファイルを作成する
REACTと違いNEXTJSは複数ページが作成できる  

## Linkコンポーネント
```<Link>```タグは```<a>```タグと同じようにリンクを作成する  
```<a>```タグには「href=""」が用意されておらず、```<Link>```の方で用意されている。  
よって```<a>```タグは不要となる
```
<Link href="/">
    Back to Index Page 
</Link>
```

# Componentを利用する
componentsディレクトリを作成する  
いつも通り作成したコンポーントで```import React, { Component } from 'react';```  
親で```import コンポーネント名 from '../パス/コンポーネント名';``` して、```<コンポーネント名 />```する


## レイアウト基本構成
4つのコンポーネントの組み合わせす
- Layout: ページ全体のレイアウトとなるコンポーネント
- Header: ヘッダー部分のコンポーネント　タイトル等表示
- Footer: フッター部分のコンポーネント　コピーライト等の表示
- Style: スタイルシートのコンポーネント　レイアウト全体のスタイル

Layoutコンポーネントにスタイルを読み込ませることで、全てのページで利用できるようにする。<br> 
各ページ固有のスタイルは各ページ利用する。
Layoutコンポーネントでラップすることで、全てのページはLayoutコンポーネントを使ってレイアウトされた形になる。
```
[index.js]
<Layout header="Next" title="TopPage">
    <p>Welcome to next.js!</p>
    <hr />
    <Link href="./other">
        <button>Go to Other Page &gt;&gt;</button>
    </Link>
</Layout>
```

# Headコンポーネント
参考:[https://t-cr.jp/memo/2201639257480a359]  
ヘッダー情報用のHead  
```<head>タグ```に相当するもの
```
//LayoutコンポーネントにHeadコンポーネントをインポート
import Head from 'next/head';
<Head>
    <title>{this.props.title}</title>
    <meta property="description" content={this.props.description} />
    <meta name="keywords" content={this.props.keyword} />
    <link rel="canonical" href={'https://xxxxxx'} />
</Head>
//親コンポーネント
 <Layout header="Next" title="TopPage"　description="ディスクリプション" keyword="キーワード">>
```

# image コンポーネント
イメージコンポーネントを作成する(Image.js)  
あらかじめファイルを利用するコンポーネントを作成しておく  
```
//コンポーンと読み込み
import Image from '../static/Image';
//コンポーネント設定
<Image fname="ファイル名" size="250" />



```


