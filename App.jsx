import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar />

      <main className="page-content">
        <h1>Welcome to Our Website</h1>
        <p>
          This is a simple page to show the responsive navigation bar.
          Try resizing your browser window to see how the menu changes.
        </p>
      </main>
    </div>
  );
}

export default App;
