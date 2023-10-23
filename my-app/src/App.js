import logo from './logo.svg';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import AppelCard from './components/AppelCard';

function App() {
  return (
    <div class="wraper">
      <Header />
    <main>
        <section class="section">
            <div class="container">
                <div class="sorting">
                   <Categories />
                    <Sort />
                </div>
                <h2 class="heading heading--strong">Все товары</h2>
                <div class="content">
                  <AppelCard titel="Мексикансие яблочки" prise="466" img="https://s1.1zoom.me/big3/593/Apples_Closeup_Red_Three_490685.jpg"/>
                  <AppelCard titel="Сибирские яблочки" prise="123" img="https://s1.1zoom.me/big3/593/Apples_Closeup_Red_Three_490685.jpg"/>
                  <AppelCard titel="Зеленные яблочки" prise="234" img="https://puddostavka.ru/upload/iblock/550/gttjtceawks3ad8pgrsogp1lrv8v1j4o.jpg"/>
                  <AppelCard titel="Южные яблочки" prise="564" img="https://s1.1zoom.me/big3/593/Apples_Closeup_Red_Three_490685.jpg"/>
                 
                </div>
            </div>  
        </section>    
    </main>
    <footer></footer>
</div>
  );
}

export default App;
