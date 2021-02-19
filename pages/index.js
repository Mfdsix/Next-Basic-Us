import Link from 'next/link'

const anchors = [
  {
    type: 'mammal',
    name: 'elephant'
  },
  {
    type: 'mammal',
    name: 'panda'
  },
  {
    type: 'reptile',
    name: 'snake'
  },
  {
    type: 'reptile',
    name: 'crocodile'
  },
]

function Index(){
  return(
  <div>
    <h3>Hello, this is is my index page</h3>
    <p>you can use below navigations as example</p>
    <ul>
      { anchors.map(e => (
      <li>
        <Link as={`/animal/${e.type}/${e.name}`} href="/animal/[type]/[name]">
        <a>{e.type} - {e.name}</a>
        </Link>
      </li>
      ))}
    </ul>
  </div>
  )
}

export default Index