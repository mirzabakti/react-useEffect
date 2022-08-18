import CatList from './components/CatList';

function App() {
  return (
    <div className='container my-5'>
      <h1 className='text-center fw-bold fs-1 text-light'>Cat List</h1>
      <div className='container my-3'>
        <div className='row'>
          <CatList />
        </div>
      </div>
    </div>
  );
}

export default App;
