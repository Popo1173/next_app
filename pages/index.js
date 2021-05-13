import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../static/Image';

export default () => (
    <Layout 
        header="Next" 
        title="TopPage"　
        description="ディスクリプション" 
        keyword="キーワード"　url={'htttp://xxxxxxxx'}>
    <p>Welcome to next.js!</p>
    <Image fname="image.jpg" size="250" />
    <hr />
        <Link href="./other">
            <button>Go to Other Page &gt;&gt;</button>
        </Link>
    </Layout>
)