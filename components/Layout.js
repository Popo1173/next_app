import React, { Component } from 'react';
//Headコンポーネントをインポート
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';

class Layout extends Component {
    render(){
        return(
            <div>
                <Head>
                    <title>{this.props.title}</title>
                    <meta property="description" content={this.props.description} />
                    <meta name="keywords" content={this.props.keyword} />
                    {/* <link rel="canonical" href={url} /> */}
                </Head>
                {style}
                <Header header={this.props.header} title={this.props.title} />
                {/* childrenでコンテンツを取り出す */}
                {this.props.children}
                <Footer footer="copyright SYODA-Tuyano." />
            </div>
        )
    }
}
export default Layout;