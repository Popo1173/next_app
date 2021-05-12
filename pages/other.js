import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header="Other" title="Other page">
        <p>This is OtherPage</p>
        <hr />
        <div>
            <Link href="/">
                &lt;&lt; Back to Index Page
            </Link>
        </div>
    </Layout>
)