import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function MainLayout({children }) {
    return <div>
        <Header />
        <Sidebar />
        {children}
    </div>;
}

export default MainLayout;