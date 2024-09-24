import {useState, useEffect} from 'react'
import './index.css'

const TextAnalysis = () => {
  const [text, setText] = useState('')
  const [uniqueWordCount, setUniqueWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [replaceText, setReplaceText] = useState('')

  useEffect(() => {
    const calculateUniqueWords = () => {
      const words = text.toLowerCase().match(/\b\w+\b/g)
      const uniqueWords = new Set(words)
      setUniqueWordCount(uniqueWords ? uniqueWords.size : 0)
    }

    const calculateCharCount = () => {
      const charCountLength = text.replace(/[^\w]/g, '').length
      setCharCount(charCountLength)
    }

    calculateUniqueWords()
    calculateCharCount()
  }, [text])

  const handleReplace = () => {
    const updatedText = text.split(searchText).join(replaceText)
    setText(updatedText)
    setSearchText('')
    setReplaceText('')
  }

  return (
    <div className="container">
      <h1>Real-Time Text Analysis</h1>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type your text here..."
      />
      <div className="stats">
        <p>
          Unique Word Count: <span className="count">{uniqueWordCount}</span>
        </p>
        <p>
          Character Count (Excluding Spaces & Punctuation):{' '}
          <span className="count">{charCount}</span>
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search for..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Replace with..."
          value={replaceText}
          onChange={e => setReplaceText(e.target.value)}
        />
        <button onClick={handleReplace} type="button">
          Replace All
        </button>
      </div>
      <footer>
        <p>Real-Time Text Analysis &copy; 2024</p>
      </footer>
    </div>
  )
}

export default TextAnalysis
