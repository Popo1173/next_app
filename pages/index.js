//Counterコンポーネントをインポート
import Counter from '../components/Counter';
// import Link from 'next/link';
//styleScriptをインポート
import style from '../static/Style';


export default () => <div>
    {/* JSXで出力 */}
    {style}
    <h1>Next.js</h1>
    <p>Welcome to next.js!</p>
    <hr />
    <Counter />
    {/* <div>
        <Link href="/other">
            <button>Go to Other Page &gt;&gt;</button>
        </Link>
    </div> */}
</div>