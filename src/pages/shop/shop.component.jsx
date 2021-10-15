import { Route } from 'react-router';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CategoryPage from '../category/category.component';

const ShopPage = ({ match }) => (
  <div>
    {/*Conditionally Render Component Based on matched path*/}
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:categoryId`} render={CategoryPage} />
  </div>
);

export default ShopPage;
