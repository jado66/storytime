import { getProviders, signIn } from "next-auth/react"
import { useContext } from "react"
import { UserContext } from "./_app"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function SignIn({ providers }:any) {
  
  const {user} = useContext(UserContext)
  const router = useRouter()

  useEffect(()=>{
    if (user?.name){
      router.push('/') 
    }
      
  },[user])
  
  
  return (
    <div className="px-5 py-5 p-lg-0 bg-surface-secondary h-100 container">

        <form className="w-50 mx-auto">
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label >Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label >Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
        <>
      {Object.values(providers).map((provider:any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
    </div>
    
  )
}

export async function getServerSideProps(context:any) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}