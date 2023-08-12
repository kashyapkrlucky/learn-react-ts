import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './state';
import RepoList from './components/RepoList';

function App() {
  return (
    <Provider store={store}>
      <div className="md:container mx-auto flex flex-col">
        <h1 className='text-xl pt-6 pb-6'>Search for a package</h1>
        <RepoList />
      </div>
    </Provider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);