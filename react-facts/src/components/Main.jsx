function handleClick(e) {
    e.preventDefault();
    console.log('Clicked', e.target);
}

const Main = () => {
  return (
    <main className="w-ful p-12 text-center">
        <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight mb-2">The AI notepad for back-to-back meetings</h1>
            <p>Notes, actions and memory Without a meeting bot.</p>
        </div>
        <div>
            <button className="bg-gray-950 hover:bg-gray-700 text-white text-sm transition-colors duration-300 mt-4 px-6 py-3 rounded-full" onClick={handleClick}>Download for free</button>
        </div>
    </main>
  )
}

export default Main