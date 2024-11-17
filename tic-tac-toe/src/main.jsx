
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Start from './components/Start.jsx'
import Board from './components/Board.jsx'

createRoot(document.getElementById('root')).render(
    <div  >
        <App/>
    </div>
)
