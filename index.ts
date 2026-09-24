import { serve } from 'bun';
import index from './index.html';
import add_quest from './page/add-quest.html';
import armory from './page/armory.html';
import yard from './page/yard.html';

const server = serve({
  routes: {
    '/*': index,
    '/add-quest': add_quest,
    '/armory': armory,
    '/yard': yard,
  },
});

console.log(`🚀 Server running at ${server.url}`);
