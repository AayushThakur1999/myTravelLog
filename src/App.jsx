import './App.css'
import Card from './Card'
import Header from './Header'
import data from './data'


const App = () => {
  const info = data.map(item => {
    return <Card key={item.id} data={item} />
  })
  return (
    <>
      <Header />
      {info}
    </>
  )
}
export default App
