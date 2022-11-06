import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className='flex w-full  flex-col gap-10 items-center justify-center px-20 text-center'>
      <div className='min-h-[80px] w-[80vw] flex items-center justify-center text-[18px]'>
        <img
          src='/car-11.jpg'
          alt=''
          className='rounded-full h-24 w-24 '
          id='profile__img'
        />
      </div>

      <div
        className='min-h-[30px] w-[80vw] flex items-center justify-center'
        id='twitter'>
        <p>YanfunmiJ</p>
      </div>
      <div
        className='min-h-[30px] w-[80vw]  items-center justify-center hidden'
        id='slack'>
        <p>Dub_jay</p>
      </div>
      <a
        id='twitter'
        title='twitter home page'
        href='https://twitter.com/YanfunmiJ?t=KLPvfBc6r07hpyABR5yakA&s=09'
        className='text-[#101828] font-600 bg-[#EAECF0] rounded-[8px] min-h-[80px] w-[80vw] flex items-center justify-center'>
        Twitter Link
      </a>

      <a
        id='btn__zuri'
        title='The Zuri Team'
        href='https://training.zuri.team/'
        className='text-[#101828] font-600 bg-[#EAECF0] rounded-[8px] min-h-[80px] w-[80vw] flex items-center justify-center'>
        Zuri Team
      </a>

      <a
        id='books'
        title='Find books about design and coding'
        href='http://books.zuri.team'
        className='text-[#101828] font-600 bg-[#EAECF0] rounded-[8px] min-h-[80px] w-[80vw] flex items-center justify-center'>
        Zuri Books
      </a>

      <a
        id='book__python'
        href='https://books.zuri.team/python-for-beginners?ref_id=Dub_jay'
        className='text-[#101828] font-600 bg-[#EAECF0] rounded-[8px] min-h-[80px] w-[80vw] flex items-center justify-center'>
        Python Books
      </a>

      <a
        id='pitch'
        title='Coders Background Check'
        href='https://background.zuri.team'
        className='text-[#101828] font-600 bg-[#EAECF0] rounded-[8px] min-h-[80px] w-[80vw] flex items-center justify-center'>
        Background Check for Coders
      </a>

      <a
        id='book__design'
        title='free design books offered by Zuri.'
        href='https://books.zuri.team/design-rules '
        className='bg-[#EAECF0] rounded-[8px] min-h-[80px] w-[80vw] flex items-center justify-center text-[#101828] font-600'>
        Design Books
      </a>
      <Link
        id='contact'
        to='/contact'
        className='bg-[#EAECF0] rounded-[8px] min-h-[80px] w-[80vw] flex items-center justify-center text-[#101828] cursor-pointer font-600'>
        Contact me
      </Link>

      <button className=' rounded-[8px] min-h-[80px] w-[80vw] flex items-center justify-center'>
        <div className='flex items-center gap-10'>
          <img src='/slack.png' alt='' />
          <img src='/github.png' alt='' />
        </div>
      </button>
    </main>
  );
}

export default Main;
