import { Outlet } from "react-router";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

function Layout() {
    return (
        <main>
            <nav><Navbar /></nav>
            <section className=" dark:bg-gray-900 dark:text-gray-100 transition">
                <Outlet />
            </section>
            <footer><Footer /></footer>
        </main>
    );
}

export default Layout;