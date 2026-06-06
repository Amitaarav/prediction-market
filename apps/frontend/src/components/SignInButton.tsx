import { useWallet }from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import  { useSupabase } from "../hooks/useSupabase"
import { SolanaSignInOutput } from '@supabase/supabase-js';
export function SignInButton() {
  const wallet = useWallet();
  const supabase = useSupabase();
  return (
    <>
      {wallet.connected ? (
        <button
          onClick={() => {
            supabase.auth.signInWithWeb3({
              chain: 'solana',
              statement: 'I accept the Terms of Service at https://example.com/tos',
              wallet,
            })
          }}
        >
          Sign in with Solana
        </button>
      ) : (
        <WalletMultiButton />
      )}
    </>
  )
}