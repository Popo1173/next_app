import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header="Next" title="TopPage">
    <p>Welcome to next.js!</p>
    <hr />
        <Link href="./other">
            <button>Go to Other Page &gt;&gt;</button>
        </Link>
    </Layout>
)