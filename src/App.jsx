import './App.css'
import { Route, Routes, NavLink, useParams, Link, Outlet } from 'react-router-dom'

const Home = () => <h1>Home Prueba</h1>
const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {
          tacos.map(taco => (
            <li key={taco}><NavLink to={`/tacos/${taco}`}>{taco}</NavLink></li>
          ))
        }
      </ul>
    </div>

  )
}
const Tacos = () => {
  const {name} =useParams()
  return(
    <div>
      <h1>Tacos</h1>
        {name}
        <Link to={'details'} >Ir a los detalles</Link>
        <Outlet/>
    </div>
  )
}

const TacoDetails = () => {
  const {name} =useParams();
  return(
    <h1>Taco Details {name}</h1>
  )
}

const NotFound = () => {
  return(
    <h1>Not Found</h1>
  )
}

function App() {

  return (
    <>
      <header>
        <h1>Yesid Vanegas</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/search-page">Search Page</NavLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:name' element={<Tacos />}>
          <Route path='details' element={<TacoDetails/>} />
        </Route>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
