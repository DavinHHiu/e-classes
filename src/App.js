import { Fragment } from 'react';
import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NoSearchLayout from './layouts/NoSearchLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = MainLayout;
                        if (route.layout === 'NoSearchLayout') Layout = NoSearchLayout;
                        else if (route.layout === null) Layout = Fragment;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
