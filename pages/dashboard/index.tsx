import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Dashboard/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';

function Dashboard() {
    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>
        </>
    )
}

Dashboard.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Dashboard;