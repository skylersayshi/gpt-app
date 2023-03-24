import '../styles/globals.css'
import SideBar from '../components/SideBar'
import { getServerSession } from 'next-auth'
import { SessionProvider } from '../components/SessionProvider'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? <Login /> : (
          <div className='flex'>
            <div className='bg-zinc-700 max-w-xs h-screen overflow-y-scroll md:min-w-[20rem]'>
              <SideBar />
            </div>
            <ClientProvider />
            <div className='bg-zinc-900 flex-1'>{children}</div>
          </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
