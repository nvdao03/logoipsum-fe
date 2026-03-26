import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PATH } from '../../constants/path'
import LogoWhite from '../../assets/imgs/logo_white.png'
import Logo from '../../assets/imgs/logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.06)]' : 'bg-yellow-300'
      }`}
    >
      <div className='max-w-screen-2xl mx-auto px-4 py-3'>
        <div className='flex items-center justify-between'>
          {/* Block left mobile */}
          <button
            className={`w-[44px] h-[44px] rounded-[50%] flex sm:hidden justify-center items-center ${isScrolled ? 'bg-[#FF9616]' : 'bg-white'}`}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='12' viewBox='0 0 18 12' fill='none'>
              <path d='M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z' fill={isScrolled ? '#fff' : '#FF9616'} />
            </svg>
          </button>
          {/* Block left desktop */}
          <div className='flex gap-4'>
            {isScrolled ? (
              <Link to={PATH.HOME}>
                <img src={Logo} alt='Logo' />
              </Link>
            ) : (
              <Link to={PATH.HOME}>
                <img src={LogoWhite} alt='Logo' />
              </Link>
            )}
            <button
              className={`hidden sm:flex items-center gap-2 py-3 px-4 rounded-[999px] ${isScrolled ? 'text-white bg-[#FF9616]' : 'text-[#FF9616] bg-white'}`}
            >
              {isScrolled ? (
                <svg xmlns='http://www.w3.org/2000/svg' width='18' height='12' viewBox='0 0 18 12' fill='none'>
                  <path
                    d='M1 12C0.71667 12 0.479337 11.904 0.288004 11.712C0.0966702 11.52 0.000670115 11.2827 3.44827e-06 11C-0.000663218 10.7173 0.0953369 10.48 0.288004 10.288C0.48067 10.096 0.718003 10 1 10H17C17.2833 10 17.521 10.096 17.713 10.288C17.905 10.48 18.0007 10.7173 18 11C17.9993 11.2827 17.9033 11.5203 17.712 11.713C17.5207 11.9057 17.2833 12.0013 17 12H1ZM1 7C0.71667 7 0.479337 6.904 0.288004 6.712C0.0966702 6.52 0.000670115 6.28267 3.44827e-06 6C-0.000663218 5.71733 0.0953369 5.48 0.288004 5.288C0.48067 5.096 0.718003 5 1 5H17C17.2833 5 17.521 5.096 17.713 5.288C17.905 5.48 18.0007 5.71733 18 6C17.9993 6.28267 17.9033 6.52033 17.712 6.713C17.5207 6.90567 17.2833 7.00133 17 7H1ZM1 2C0.71667 2 0.479337 1.904 0.288004 1.712C0.0966702 1.52 0.000670115 1.28267 3.44827e-06 1C-0.000663218 0.717333 0.0953369 0.48 0.288004 0.288C0.48067 0.0960001 0.718003 0 1 0H17C17.2833 0 17.521 0.0960001 17.713 0.288C17.905 0.48 18.0007 0.717333 18 1C17.9993 1.28267 17.9033 1.52033 17.712 1.713C17.5207 1.90567 17.2833 2.00133 17 2H1Z'
                    fill='white'
                  />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' width='18' height='12' viewBox='0 0 18 12' fill='none'>
                  <path
                    d='M1 12C0.71667 12 0.479337 11.904 0.288004 11.712C0.0966702 11.52 0.000670115 11.2827 3.44827e-06 11C-0.000663218 10.7173 0.0953369 10.48 0.288004 10.288C0.48067 10.096 0.718003 10 1 10H17C17.2833 10 17.521 10.096 17.713 10.288C17.905 10.48 18.0007 10.7173 18 11C17.9993 11.2827 17.9033 11.5203 17.712 11.713C17.5207 11.9057 17.2833 12.0013 17 12H1ZM1 7C0.71667 7 0.479337 6.904 0.288004 6.712C0.0966702 6.52 0.000670115 6.28267 3.44827e-06 6C-0.000663218 5.71733 0.0953369 5.48 0.288004 5.288C0.48067 5.096 0.718003 5 1 5H17C17.2833 5 17.521 5.096 17.713 5.288C17.905 5.48 18.0007 5.71733 18 6C17.9993 6.28267 17.9033 6.52033 17.712 6.713C17.5207 6.90567 17.2833 7.00133 17 7H1ZM1 2C0.71667 2 0.479337 1.904 0.288004 1.712C0.0966702 1.52 0.000670115 1.28267 3.44827e-06 1C-0.000663218 0.717333 0.0953369 0.48 0.288004 0.288C0.48067 0.0960001 0.718003 0 1 0H17C17.2833 0 17.521 0.0960001 17.713 0.288C17.905 0.48 18.0007 0.717333 18 1C17.9993 1.28267 17.9033 1.52033 17.712 1.713C17.5207 1.90567 17.2833 2.00133 17 2H1Z'
                    fill='#FF9616'
                  />
                </svg>
              )}
              Danh mục
            </button>
          </div>
          {/* Block center */}
          {isScrolled && (
            <div className='hidden xl:flex items-center gap-[14px] rounded-[999px] bg-white shadow-[0_0_13px_0_rgba(0,0,0,0.10)] p-3'>
              {/* Category */}
              <div className='relative w-[170px]'>
                <select
                  name=''
                  id=''
                  className='custom-select appearance-none w-full py-3 px-3 pr-10 bg-[#F6F6F6] rounded-[999px] outline-none'
                >
                  <option value=''>Danh mục</option>
                </select>
                <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M7.37629 7.37629C7.18876 7.56376 6.93445 7.66907 6.66929 7.66907C6.40412 7.66907 6.14982 7.56376 5.96229 7.37629L0.305288 1.71929C0.209778 1.62704 0.133596 1.5167 0.0811869 1.39469C0.0287779 1.27269 0.00119157 1.14147 3.77564e-05 1.00869C-0.00111606 0.87591 0.0241859 0.744231 0.0744668 0.621335C0.124748 0.498438 0.199001 0.386786 0.292893 0.292893C0.386786 0.199 0.498438 0.124747 0.621334 0.0744663C0.744231 0.0241854 0.87591 -0.00111606 1.00869 3.77571e-05C1.14147 0.00119157 1.27269 0.0287779 1.39469 0.0811869C1.5167 0.133596 1.62704 0.209778 1.71929 0.305288L6.66929 5.25529L11.6193 0.305288C11.8079 0.12313 12.0605 0.0223355 12.3227 0.0246139C12.5849 0.0268924 12.8357 0.132061 13.0211 0.317469C13.2065 0.502877 13.3117 0.75369 13.314 1.01589C13.3162 1.27808 13.2154 1.53069 13.0333 1.71929L7.37629 7.37629Z'
                      fill='black'
                    />
                  </svg>
                </span>
              </div>
              {/* Address */}
              <div className='relative w-[170px]'>
                <select
                  name=''
                  id=''
                  className='custom-select appearance-none w-full py-3 px-3 pr-10 bg-[#F6F6F6] rounded-[999px] outline-none'
                >
                  <option value=''>Địa chỉ</option>
                </select>
                <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M7.37629 7.37629C7.18876 7.56376 6.93445 7.66907 6.66929 7.66907C6.40412 7.66907 6.14982 7.56376 5.96229 7.37629L0.305288 1.71929C0.209778 1.62704 0.133596 1.5167 0.0811869 1.39469C0.0287779 1.27269 0.00119157 1.14147 3.77564e-05 1.00869C-0.00111606 0.87591 0.0241859 0.744231 0.0744668 0.621335C0.124748 0.498438 0.199001 0.386786 0.292893 0.292893C0.386786 0.199 0.498438 0.124747 0.621334 0.0744663C0.744231 0.0241854 0.87591 -0.00111606 1.00869 3.77571e-05C1.14147 0.00119157 1.27269 0.0287779 1.39469 0.0811869C1.5167 0.133596 1.62704 0.209778 1.71929 0.305288L6.66929 5.25529L11.6193 0.305288C11.8079 0.12313 12.0605 0.0223355 12.3227 0.0246139C12.5849 0.0268924 12.8357 0.132061 13.0211 0.317469C13.2065 0.502877 13.3117 0.75369 13.314 1.01589C13.3162 1.27808 13.2154 1.53069 13.0333 1.71929L7.37629 7.37629Z'
                      fill='black'
                    />
                  </svg>
                </span>
              </div>
              {/* Search */}
              <div className='flex items-center px-3 bg-[#F6F6F6] rounded-[999px] outline-none'>
                <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
                  <path
                    d='M13.643 13.67L16.723 16.75M15.75 8.25C15.75 10.2391 14.9598 12.1468 13.5533 13.5533C12.1468 14.9598 10.2391 15.75 8.25 15.75C6.26088 15.75 4.35322 14.9598 2.9467 13.5533C1.54018 12.1468 0.75 10.2391 0.75 8.25C0.75 6.26088 1.54018 4.35322 2.9467 2.9467C4.35322 1.54018 6.26088 0.75 8.25 0.75C10.2391 0.75 12.1468 1.54018 13.5533 2.9467C14.9598 4.35322 15.75 6.26088 15.75 8.25Z'
                    stroke='black'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <input
                  type='text'
                  className='bg-transparent ml-2.5 py-3 outline-none'
                  placeholder='Tìm kiếm sản phẩm'
                />
              </div>
              {/* Action */}
              <button className='bg-[#FF9616] rounded-[50%] p-3 flex justify-center items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <path
                    d='M14.75 14.75L18.75 18.75M0.75 8.75C0.75 10.8717 1.59285 12.9066 3.09315 14.4069C4.59344 15.9071 6.62827 16.75 8.75 16.75C10.8717 16.75 12.9066 15.9071 14.4069 14.4069C15.9071 12.9066 16.75 10.8717 16.75 8.75C16.75 6.62827 15.9071 4.59344 14.4069 3.09315C12.9066 1.59285 10.8717 0.75 8.75 0.75C6.62827 0.75 4.59344 1.59285 3.09315 3.09315C1.59285 4.59344 0.75 6.62827 0.75 8.75Z'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
            </div>
          )}
          {/* Block right desktop */}
          <div className='hidden sm:flex gap-3'>
            <Link
              to={PATH.SIGNUP}
              className={`py-3 px-4 border-[2px] border-solid rounded-[8px] font-semibold ${isScrolled ? 'border-[#FF9616] text-[#FF9616]' : 'border-white text-white'}`}
            >
              Đăng ký
            </Link>
            <Link
              to={PATH.SIGNIN}
              className={`py-3 px-4 border border-solid rounded-[8px] font-semibold ${isScrolled ? 'text-white bg-[#FF9616]' : 'text-[#FF9616] bg-white border-white'}`}
            >
              Đăng nhập
            </Link>
          </div>
          {/* Block right mobile */}
          <button
            className={`p-[10px] rounded-[50%] flex sm:hidden justify-center items-center ${isScrolled ? 'bg-[#FF9616]' : 'bg-white'}`}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z'
                stroke={isScrolled ? '#fff' : '#FF9616'}
                stroke-width='2'
              />
              <path
                d='M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z'
                stroke={isScrolled ? '#fff' : '#FF9616'}
                stroke-width='2'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
