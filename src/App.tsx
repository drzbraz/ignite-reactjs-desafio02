import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { MoviesProvider } from './context/MoviesContext';
import './styles/content.scss';
import './styles/global.scss';
import './styles/sidebar.scss';

export function App() {
  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar/>
        <Content/>
      </div>
    </MoviesProvider>
  )
}