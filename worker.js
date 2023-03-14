// This is a module worker, so we can use imports (in the browser too!)
import pi from './src/utils/pi'

addEventListener('message', (event) => {
  postMessage(pi(event.data))
})
