import { Link } from 'react-router-dom'
import Logo from '../../../assets/imgs/logo.png'
import { PATH } from '../../../constants/path'

function ForgotPassword() {
  return (
    <div className='bg-[#FAFAFA] w-full h-screen'>
      <div className='py-5 px-5 sm:px-10 flex items-center sm:justify-between'>
        <Link to={PATH.HOME} className='text-center ml-auto translate-x-[20px] sm:translate-x-0 sm:ml-0 cursor-pointer'>
          <img src={Logo} alt='logo' />
        </Link>
        <Link to={PATH.HOME} className='flex items-center gap-2 text-[14px] ml-auto sm:ml-0'>
          <button className='flex justify-center items-center w-[40px] h-[40px] rounded-[50%] sm:rounded-none bg-white sm:bg-transparent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]'
              viewBox='0 0 26 26'
              fill='none'
            >
              <g clip-path='url(#clip0_161_1048)'>
                <path
                  d='M14.4495 0.902945C14.0516 0.544834 13.5353 0.34668 13 0.34668C12.4647 0.34668 11.9484 0.544834 11.5505 0.902945L0 11.2986V22.5653C0 23.4847 0.365237 24.3665 1.01536 25.0166C1.66549 25.6667 2.54725 26.0319 3.46667 26.0319H22.5333C23.4528 26.0319 24.3345 25.6667 24.9846 25.0166C25.6348 24.3665 26 23.4847 26 22.5653V11.2986L14.4495 0.902945ZM16.25 23.862H9.75V18.4172C9.75 17.5552 10.0924 16.7286 10.7019 16.1191C11.3114 15.5096 12.138 15.1672 13 15.1672C13.862 15.1672 14.6886 15.5096 15.2981 16.1191C15.9076 16.7286 16.25 17.5552 16.25 18.4172V23.862ZM23.8333 22.562C23.8333 22.9068 23.6964 23.2375 23.4526 23.4813C23.2088 23.7251 22.8781 23.862 22.5333 23.862H18.4167V18.4172C18.4167 16.9806 17.846 15.6029 16.8302 14.587C15.8143 13.5712 14.4366 13.0005 13 13.0005C11.5634 13.0005 10.1857 13.5712 9.16984 14.587C8.15402 15.6029 7.58333 16.9806 7.58333 18.4172V23.862H3.46667C3.12189 23.862 2.79123 23.7251 2.54743 23.4813C2.30363 23.2375 2.16667 22.9068 2.16667 22.562V12.2628L13 2.51278L23.8333 12.2628V22.562Z'
                  fill='#333333'
                />
              </g>
              <defs>
                <clipPath id='clip0_161_1048'>
                  <rect width='26' height='26' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </button>
          <span className='hidden sm:block'>Quay về trang chủ</span>
        </Link>
      </div>
      <div className='w-screen h-[calc(100vh-80px)] flex items-center justify-center'>
        <div className='relative w-[90%] sm:w-[460px] bg-white rounded-[24px]'>
          <div className='py-6 px-[18px] sm:p-6'>
            <div className='flex items-center mb-10'>
              <Link to={PATH.SIGNIN}>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='14' viewBox='0 0 24 14' fill='none'>
                  <path
                    d='M23.9998 7.707V5.707L2.55477 5.738L6.87677 1.414L5.46277 0L0.876773 4.586C0.314359 5.14858 -0.00158691 5.91151 -0.00158691 6.707C-0.00158691 7.50249 0.314359 8.26542 0.876773 8.828L5.46277 13.414L6.87677 12L2.61477 7.738L23.9998 7.707Z'
                    fill='#333333'
                  />
                </svg>
              </Link>
              <h1 className='text-[18px] sm:text-[20px] text-center font-semibold mx-auto'>Quên mật khẩu</h1>
            </div>
            <form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='flex items-center gap-2 text-[14px] sm:text-[16px]'>
                  Email
                  <svg xmlns='http://www.w3.org/2000/svg' width='7' height='7' viewBox='0 0 7 7' fill='none'>
                    <path
                      d='M1.888 6.336L0.896 5.632L2.4 3.616L0 2.864L0.368 1.696L2.752 2.512L2.72 0H3.936L3.92 2.512L6.304 1.696L6.672 2.864L4.288 3.616L5.776 5.632L4.784 6.336L3.328 4.304L1.888 6.336Z'
                      fill='#FB3748'
                    />
                  </svg>
                </label>
                <input
                  type='text'
                  className='w-full rounded-lg py-3.5 px-3 bg-[#F9F9F9] placeholder:text-[14px] border-none outline-none text-[14px] sm:text[16px]'
                  placeholder='Nhập địa chỉ email'
                />
              </div>
              <div className='flex justify-center items-center'>
                <button className='h-10 sm:h-[48px] flex justify-center items-center text-center text-[14px] sm:text-[16px] text-white px-4 py-4 bg-[#FFD388] rounded-lg w-full'>
                  Tiếp theo
                </button>
              </div>
            </form>
            {/* Sing In */}
            <div className='flex justify-center items-center mt-[26px] text-[14px] sm:text-[16px]'>
              <span>
                Bạn chưa có tài khoản -{' '}
                <Link to={PATH.SIGNUP} className='text-[#FF8520] hover:underline'>
                  Đăng ký ngay
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
