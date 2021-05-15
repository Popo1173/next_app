import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter'

export default () => (
    <Layout header="Other" title="Other page">
        <Counter />
        <p>This is OtherPage</p>
        <hr />
        <div>
            <Link href="/">
                &lt;&lt; Back to Index Page
            </Link>
        </div>
    </Layout>
)