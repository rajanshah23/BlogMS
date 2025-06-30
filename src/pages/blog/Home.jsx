
import Layout from "../../components/layout/layout";
import Card from "./components/card/Card";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-2 mt-5 px-4 ">
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </Layout>
  );
};

export default Home;
