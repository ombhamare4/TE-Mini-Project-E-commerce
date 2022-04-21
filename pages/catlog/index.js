import CatalogMenu from "../../components/CatalogMenu/CatalogMenu";
import Layout from "../../components/Layout/Layout";
import classes from './catlog.module.css';



const Catlog =()=>{
    return(
        <Layout>
            <div className={classes.layout}>
                <h2 className="text-white">Catalog</h2>
            </div>
           <CatalogMenu/>
        </Layout>
    )
};

export default Catlog;