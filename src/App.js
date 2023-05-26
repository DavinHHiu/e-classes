import { Fragment, createContext } from 'react';
import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

export const UserContext = createContext();

function App() {
    return (
        <UserContext.Provider value={JSON.parse(localStorage.getItem('user'))}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = route.layout === null ? Fragment : MainLayout;
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
        </UserContext.Provider>
    );
}

export default App;
