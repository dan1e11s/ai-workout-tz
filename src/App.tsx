import Bar from '@components/Bar';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h1>Тренировки</h1>
        <p>mini app</p>
      </div>
      <CardList />
      <Bar />
    </div>
  );
}

export default App;
