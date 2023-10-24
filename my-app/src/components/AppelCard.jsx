import React from 'react'; 

function AppelCard({titel, prise, img, sizes, types}) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [activeIndexType, setactiveIndexType] = React.useState(0);
    const typeNames = ['тонкое' , 'традиционное'];

    const[appelCount, setAppelCount] = React.useState(1);
    const[appelPrise, setAppelPrise] = React.useState(prise);

    const onClickAdd = () => {
        setAppelCount(appelCount + 1);
        setAppelPrise(prise * (appelCount+1));
    }
    const onClickCategories = (index) => {
      setActiveIndex(index);
     }
     const onClickCategoriesTupe = (index) => {
      setactiveIndexType(index);
     }
    return(
        <div className="card">
        <img className="card__img" src={img} alt=""></img>
        <h4 className="card__heading">{titel}</h4>
        <div className="card__selector">
            <ul className="list--reset card__list">
              {
                types.map((typeId) => <li onClick={() => setactiveIndexType(typeId)} className={activeIndexType===typeId ? "card__list-item card__list-item--active" : "card__list-item"}>{typeNames[typeId]} </li>)
              }
            </ul>
            <ul className="list--reset card__list">
              {
                sizes.map((size,i) => <li onClick={() => onClickCategories(i)} className={activeIndex===i ? "card__list-item card__list-item--active" : "card__list-item"}>{size} cм.</li>)
              }
            </ul>
          </div>
        <div className="card__bottom">
            <div className="card__price">от {appelPrise} ₽</div>
            <button onClick={onClickAdd} className="button button--outline button--add">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
              </svg>
              <span>Добавить</span>
              <i>{appelCount}</i>
            </button>
          </div>
    </div>
    )
}
export default AppelCard;