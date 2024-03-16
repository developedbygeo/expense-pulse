import './globals.css';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import EventHandler from './components/modules/EventHandler';
import router from './routes';
import store from './store';

const App = () => (
  <>
    <Provider store={store}>
      {/* <EventHandler /> */}
      <RouterProvider router={router} />
    </Provider>
  </>
);

export default App;
