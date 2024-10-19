import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { ModeToggle } from "./ModeToggle"

const Nav = () => {
  return (
   <nav className="container flex items-center justify-between">
        <ModeToggle/>
    <SignedIn>
        <UserButton/>
    </SignedIn>

<SignedOut>
    <SignInButton/>
</SignedOut>

   </nav>
  )
}

export default Nav