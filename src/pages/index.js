import React from "react";
import Layout from "../components/Layout";
import TextModal from "../components/TextModal";

const Home = () => {
    return (
        <Layout>
            <div className="homepage">
                <div className="landing-page">
                    <TextModal />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
