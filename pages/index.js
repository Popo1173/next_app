import Link from 'next/link';
//styleScriptをインポート
import style from '../static/Style';

export default () => <div>
    {style}
    <h1>Next.js</h1>
    <p>Welcome to next.js!</p>
    <hr />
    <div>
        <Link href="/other">
            <button>Go to Other Page &gt;&gt;</button>
        </Link>
    </div>
</div>