import '@/assets/globals.css'

export const metadata = {
  title: 'Property Plus | Find the Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>    
      </body>
    </html>
  )
}

export default MainLayout