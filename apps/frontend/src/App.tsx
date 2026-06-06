// import { clusterApiUrl } from '@solana/web3.js';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
// import { SignInButton } from './components/SignInButton';
import { useSupabase } from './hooks/useSupabase';
import { useUser } from "./hooks/useUser";
// import { useMemo } from "react";
function App(){
  const  claims  = useUser();
  const supabase = useSupabase();
  // const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  // const wallets = useMemo(() => [], []);
  const handleSignIn = async() => {

    await supabase.auth.signInWithWeb3({
      chain: 'solana',
      statement: 'I confirm I want to singin to prediction market',
      // wallet: window.solflare
    });
  }

  const handleSignOut = async() => {
    await supabase.auth.signOut()
  }

  return(
    <div className="flex items-center mt-8">
      {window.solflare && !claims && <button onClick={handleSignIn} className="p-2 bg-blue-500 cursor-pointer text-white font-semibold rounded-sm">
          Sign In with Solflare
      </button>
      }

      {window.phantom && !claims && <button onClick={handleSignIn} className="p-2 bg-blue-500 cursor-pointer text-white font-semibold rounded-sm">
          Sign In with Phantom
      </button>
      }

      {
        claims && <button className="" onClick={handleSignOut}>Log out</button>
      }

      {JSON.stringify(claims)}
    </div>
    
  )
  //   return (
  //   <ConnectionProvider endpoint={endpoint}>
  //     <WalletProvider wallets={wallets}>
  //       <WalletModalProvider>
  //         <SignInButton />
  //       </WalletModalProvider>
  //     </WalletProvider>
  //   </ConnectionProvider>
  // )
}

export default App;