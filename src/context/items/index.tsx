import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Items from '@/components/Items';
// Create a client
const queryClient = new QueryClient();

function ItemsProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Items /> 
    </QueryClientProvider>
  );
}

export default ItemsProvider;