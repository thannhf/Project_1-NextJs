import AdminContent from "@/components/layout/admin.content";
import AdminFooter from "@/components/layout/admin.footer";
import AdminHeader from "@/components/layout/admin.header";
import AdminSideBar from "@/components/layout/admin.sidebar";
import { Layout } from "antd";

const AdminLayout = ({ 
    children, 
}: Readonly<{ 
    children: React.ReactNode 
}>) => {

    return (
        <Layout>
            <AdminSideBar/>
            <Layout>
                {/* header */}
                <AdminHeader />

                    {/* content */}
                    <AdminContent>
                        {children}
                    </AdminContent>
                
                {/* footer */}
                <AdminFooter />
            </Layout>
        </Layout>
    )
}

export default AdminLayout;