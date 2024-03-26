import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import Menu  from './components/Menu'


function App() {
  const [show, setShow] = useState('all');

  return (
    <>
    <Menu/>
      <div>
        <h1>Tecnologies</h1>
        <div>
          <button onClick={() => setShow('React')}>React</button>
          <button onClick={() => setShow('Vite')}>Vite</button>
          <button onClick={() => setShow('Axios')}>Axios</button>
          <button onClick={() => setShow('RRD')}>React Router Dom</button>
          <button onClick={() => setShow('NPM')}>NPM</button>
          <button onClick={() => setShow('NodeJS')}>Node JS</button>
        </div>
      </div>
      <div>
        {show == 'React' && <Card title='React' imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>}
        {show == 'Vite' && <Card title='Vite' imgSrc='https://www.svgrepo.com/show/374167/vite.svg'/>}
        {show == 'Axios' && <Card title='Axios' imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/2560px-Axios_logo_%282020%29.svg.png'/>}
        {show == 'RRD' && <Card title='RRD' imgSrc='https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png'/>}
        {show == 'NPM' && <Card title='NPM' imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png'/>}
        {show == 'NodeJS' && <Card title='NodeJS' imgSrc='https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp'/>}
        {show == 'all' && 
        <>
        <Card title='React' imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
        <Card title='Vite' imgSrc='https://www.svgrepo.com/show/374167/vite.svg'/>
        <Card title='Axios' imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/2560px-Axios_logo_%282020%29.svg.png'/>
        <Card title='RRD' imgSrc='https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png'/>
        <Card title='NPM' imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png'/>
        <Card title='NodeJS' imgSrc='https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp'/>
        </>}
      </div>
    </>
  )
}

export default App
