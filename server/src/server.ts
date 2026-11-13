import Fastify from 'fastify';
import cors from '@fastify/cors';

const server = Fastify({ logger: true });

// Register CORS so your React frontend can communicate with it
await server.register(cors, {
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Adjust based on your frontend port
});

// Test API route for products
server.get('/api/products', async (request, reply) => {
  return [
    {
      id: '1',
      name: 'Sagada Arabica - Dark Roast',
      price: 450,
      weight: '250g',
      grind: ['Whole Bean', 'Espresso', 'Drip'],
      imageUrl: 'https://images.unsplash.com/...',
    },
    {
      id: '2',
      name: 'Benguet Blend - Medium Roast',
      price: 380,
      weight: '250g',
      grind: ['Whole Bean', 'Drip'],
      imageUrl: 'https://images.unsplash.com/...',
    },
  ];
});

// Run the server
const start = async () => {
  try {
    await server.listen({ port: 4000, host: '0.0.0.0' });
    console.log('🚀 Fastify server running on http://localhost:4000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();