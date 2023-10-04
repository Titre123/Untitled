import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavDropdown from '../nav_dropdown/nav_dropdown';
import Logo from '../logoUI/logo';
import { ToggleMobile } from '../../redux/actions/landing_actions';


function Navbar() {

  const toggleMobile = useSelector(state => state.toggleMobile);
  console.log(toggleMobile);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <>
    <div className="flex items-center justify-between py-5 desktop:gap-8">
        <Logo className="hidden ipad:flex"/>
        <div className="Logomark shadow justify-start items-start inline-flex ipad:hidden">
          <div className="Content w-8 h-8 relative bg-gradient-to-b from-white to-gray-300 rounded-lg border border border border border-gray-300">
          <div className="Grid w-8 h-8 left-0 top-0 absolute" />
          <div className="Dot w-4 h-4 left-[8px] top-[8px] absolute bg-gradient-to-tr from-violet-900 to-violet-700 rounded-full shadow" />
          <div className="Blur w-8 h-4 left-0 top-[16px] absolute bg-white bg-opacity-20 rounded-bl-lg rounded-br-lg backdrop-blur-[5px]" />
          </div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='desktop:flex justify-between items-center hidden w-full'>
              <ul className='desktop:flex desktop:space-x-8'>
                <li className="text-base cursor-pointer"><a>Home</a></li>
                <NavDropdown navDropdownText="Product"/>
                <NavDropdown navDropdownText="Resource"/>
                <li className="text-base cursor-pointer"><a>Pricing</a></li>
              </ul>
              <div className="Dropdown flex-col justify-start items-start cursor-pointer inline-flex">
              <div className="NavigationActions justify-start items-center gap-3 flex">
              <button className="Button rounded-lg justify-start items-start flex" onClick={() => navigate('/login')}>
                <div className="ButtonBase px-[18px] py-2.5 rounded-lg justify-center items-center gap-2 flex">
                  <span className="Text text-gray-500 text-[16px] font-semibold leading-normal">Log in</span>
                </div>
              </button>
              <button className="Button rounded-lg justify-start items-start cursor-pointer flex" onClick={() => navigate('/signup')}>
                <div className="ButtonBase px-[18px] py-2.5 bg-violet-500 rounded-lg shadow border border border border border-violet-500 justify-center items-center gap-2 flex">
                  <span className="Text text-white text-[16px] font-semibold leading-normal">Sign up</span>
                </div>
              </button>
              </div>
              </div>
          </div>
        </div>
        <div className='desktop:hidden'>
          {toggleMobile ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(ToggleMobile())}>
            <path d="M18 6L6 18M6 6L18 18" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(ToggleMobile())}>
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>}
        </div>
    </div>
  </>
  );
}

export default Navbar;