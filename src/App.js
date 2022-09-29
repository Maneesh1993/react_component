import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card1 from './card1'

function App() {
  return (
    <section class="pricing py-5">
      <div class="container">
        <div className="row">
          <Card1 planname="free" price="$0"></Card1>
          <Card1 planname="Plus" price="$9"></Card1>
          <Card1 planname="pro" price="$49"></Card1>
        </div>
      </div>
    </section>
  );
}

export default App;
