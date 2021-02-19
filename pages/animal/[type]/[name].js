import { useRouter } from 'next/router'

function Name(){
    let router = useRouter()
    return <p>Selected Animal is: <b>{router.query.name}</b> which typed <b>{ router.query.type }</b></p>
}

export default Name