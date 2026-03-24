import Navbar from '../../components/Navbar'

interface PropTypes {
  children: React.ReactNode
}

function MainLayout({ children }: PropTypes) {
  return (
    <div className='h-[5000px]'>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout
