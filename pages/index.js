import Link from 'next/link'

function Index(){
  return(
  <div>
    <h3>Hello, this is is my index page</h3>
    <p>you can use below navigations as example</p>
    <ul>
      <li>
        <Link as="/animal/mammal/elephant" href="/animal/[type]/[name]">
        <a>Mammal - Elephant</a>
        </Link>
      </li>
      <li>
        <Link as="/animal/mammal/panda" href="/animal/[type]/[name]">
        <a>Mammal - Panda</a>
        </Link>
      </li>
      <li>
        <Link as="/animal/reptile/snake" href="/animal/[type]/[name]">
        <a>Mammal - Snake</a>
        </Link>
      </li>
      <li>
        <Link as="/animal/reptile/crocodile" href="/animal/[type]/[name]">
        <a>Mammal - Crocodile</a>
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Index