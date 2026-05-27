import {useSupabase } from "./hooks/useSupabase";
import { useUser } from "./hooks/useUser";

function App(){
  const  claims  = useUser();
  const supabase = useSupabase();
  const handleSign = async() => {

    await supabase.auth.signInWithWeb3({
      chain: 'solana',
      statement: 'I confirm I want to singin to prediction market',
      // wallet: window.solflare
    });
  }
  return(
    <div>
      { !claims && <button onClick={handleSign} className="p-2 cursor-pointer border rounded-sm">
          Sign In with wallet Solana
      </button>
      }
      {
        claims && <button>Log out</button>
      }

      {JSON.stringify(claims)}
    </div>
    
  )
}

export default App;