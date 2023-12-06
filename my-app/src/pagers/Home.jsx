import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import AppelCard from '../components/AppelCard';
import Skeleton from '../components/AppelCard/Skeleton';
import Pagination from '../components/Pagination';

export const Home = ({searchValue}) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [currentPage, setCrrentPage] = React.useState(1);
    const [sortType, setSortType] = React.useState(0);
    const list = ['index','prise','titel']

    React.useEffect(() => {
      setIsLoading(true);

      const categoriFilter = categoryId==0 ?'category!='+ categoryId : 'category='+ categoryId;
      const search = searchValue ?'&search='+ searchValue : '';

      fetch('https://6538dfb9a543859d1bb21a80.mockapi.io/Items?page='+currentPage+'&limit=8&'+ categoriFilter + search +'&sortBy='+ list[sortType] +'&order=abc').then((res) => {
        return res.json();
      }).then(arr => {
        setItems(arr);
        setIsLoading(false);
      });
    }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="sorting">
          <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
          <Sort value={sortType} onClickSort={(id) => setSortType(id)}/>
      </div>
      <h2 className="heading heading--strong">Все товары</h2>
      <div className="content">
      {
        isLoading ? [... new Array(8)].map((_, index) => (<Skeleton key={index}/>)) 
        : items.map((obj) => (
          <AppelCard key={obj.index} {...obj}/>
        ))
      }
      </div>
      <Pagination onChangePage={(number) => setCrrentPage(number)}/>
    </>
  )
}
export default Home