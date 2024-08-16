import '../../../style/App.css';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">HOME PAGE</h1>
      <button
        className="btn btn-active btn-secondary"
        onClick={() => {
          console.log('hello');
        }}
      >
        Secondary
      </button>
    </>
  );
}

export default App;
