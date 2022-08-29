function ContentButton({ children }) {
  return (
    <button className='border-2 transition ease-in-out delay-75 bg-slate-300 hover:bg-slate-600 active:bg-slate-900 py-1 w-20 md:w-full'>
      {children}
    </button>
  )
}

export default ContentButton
