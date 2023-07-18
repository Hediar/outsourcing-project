import store from './redux/config/configStore';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
