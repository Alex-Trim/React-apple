import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import AppelCard from '../components/AppelCard';
import Skeleton from '../components/AppelCard/Skeleton';

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      fetch('https://6538dfb9a543859d1bb21a80.mockapi.io/Items').then((res) => {
        return res.json();
      }).then(arr => {
        setItems(arr);
        setIsLoading(false);
      });
    }, []);

  return (
    <>
      <div className="sorting">
          <Categories />
          <Sort />
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
    </>
  )
}
export default Home