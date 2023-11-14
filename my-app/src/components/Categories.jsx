import React from 'react'; 

function Categories({value, onClickCategory}) {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


    return(
      <div className="categories">
        <ul className="list--reset categories__list ">
            {
                categories.map((CategoryName , i) => (
                    <li key={i} onClick={() => onClickCategory(i)} 
                    className={
                        value===i ? 
                        "categories__item categories__item--active" : 
                        "categories__item"
                        }>
                        {CategoryName}
                    </li>
                ))
            }
        </ul>
      </div>
    )
  }
  export default Categories;