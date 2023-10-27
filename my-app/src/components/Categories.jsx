import React from 'react'; 

function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onClickCategories = (index) => {
        setActiveIndex(index);
    }
    return(
      <div className="categories">
        <ul className="list--reset categories__list ">
            {
                categories.map((value , i) => (
                    <li key={i} onClick={() => onClickCategories(i)} className={activeIndex===i ? "categories__item categories__item--active" : "categories__item"}>
                        {value}
                    </li>
                ))
            }
        </ul>
      </div>
    )
  }
  export default Categories;