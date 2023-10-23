import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="wraper">
    <header class="header">
        <div class="container header__container">
            <div class="header__logo logo">
                <img class="logo__img" src="img/apple.png" alt=""></img>
                <div class="logo__description">
                    <h1>React Apple</h1>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
            </div>
            <div class="header__nav">
                <nav class="nav">
                    <ul class="list--reset nav__list">
                        <li class="nav__item">
                            <a class="link link--btn link--btn-basket" href="">
                                <div class="link-btn--basket__cost">
                                    <span>453</span>
                                    <span>p</span>
                                </div>
                                <div class="link-btn--basket__delimiter"></div>
                                <div class="link-btn--basket__product">
                                    <svg class="basket-icon" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="currentColor" stroke-width="1.5"/>
                                        <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="currentColor" stroke-width="1.5"/>
                                        <path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5" stroke="currentColor" stroke-width="1.5"/>
                                        </svg>
                                    <span class="link-btn--basket__product--num">3</span>
                                </div>
                               
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <section class="section">
            <div class="container">
                <div class="sorting">
                    <div class="categories">
                        <ul class="list--reset categories__list ">
                          <li class="categories__item categories__item--active">Все</li>
                          <li class="categories__item">Мясные</li>
                          <li class="categories__item">Вегетарианская</li>
                          <li class="categories__item">Гриль</li>
                          <li class="categories__item">Острые</li>
                          <li class="categories__item">Закрытые</li>
                        </ul>
                    </div>
                    <div class="sort">
                        <div class="sort__label">
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"></path>
                          </svg>
                          <b>Сортировка по:</b>
                          <span class="sort__item">популярности</span>
                        </div>
                        <div class="hidden sort__popup">
                          <ul>
                            <li class="active">популярности</li>
                            <li>цене</li>
                            <li>алфавиту</li>
                          </ul>
                        </div>
                      </div>
                </div>
                <h2 class="heading heading--strong">Все товары</h2>
                <div class="content">
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                    <div class="card">
                        <img class="card__img" src="img/tovar/160020533.png" alt=""></img>
                        <h4 class="card__heading">Гала</h4>
                        <div class="card__selector">
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">тонкое</li>
                              <li class="card__list-item ">традиционное</li>
                            </ul>
                            <ul class="list--reset card__list">
                              <li class="card__list-item card__list-item--active">26 см.</li>
                              <li class="card__list-item ">30 см.</li>
                              <li class="card__list-item ">40 см.</li>
                            </ul>
                          </div>
                        <div class="card__bottom">
                            <div class="card__price">от 395 ₽</div>
                            <div class="button button--outline button--add">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"></path>
                              </svg>
                              <span>Добавить</span>
                              <i>2</i>
                            </div>
                          </div>
                    </div>
                </div>
            </div>  
        </section>    
    </main>
    <footer></footer>
</div>
  );
}

export default App;
