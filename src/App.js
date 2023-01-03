import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routes';
import DefaultLayout from '~/component/Layout/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRouters.map((router, index) => {
                        let Layout = DefaultLayout;

                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = router.component;
                        return (
                            <Route
                                key={index}
                                path={router.path}
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
        </BrowserRouter>
    );
}

export default App;
