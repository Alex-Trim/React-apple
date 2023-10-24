import logo from './logo.svg';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import AppelCard from './components/AppelCard';
import appelItom from './assets/appel.json'
function App() {
  return (
    <div className="wraper">
      <Header />
    <main>
        <section className="section">
            <div className="container">
                <div className="sorting">
                   <Categories />
                    <Sort />
                </div>
                <h2 className="heading heading--strong">Все товары</h2>
                <div className="content">
                {
                  appelItom.map((obj) => (
                    <AppelCard {...obj}/>
                    ))
                }
                </div>
            </div>  
        </section>    
    </main>
    <footer></footer>
</div>
  );
}

export default App;
