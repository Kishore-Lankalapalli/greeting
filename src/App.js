import {useState} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageGreetingsList[0].buttonText,
  )

  const greeting = languageGreetingsList.find(
    item => item.buttonText === selectedLanguage,
  )
  console.log(greeting)

  return (
    <div className="container">
      <h1 className="multilingual-greetings-heading">Multilingual Greetings</h1>
      <div className="languages-button-container">
        <button
          className={
            selectedLanguage === 'English'
              ? 'language-button selected-button'
              : 'language-button'
          }
          onClick={() => setSelectedLanguage('English')}
        >
          English{' '}
        </button>
        <button
          className={
            selectedLanguage === 'Tamil'
              ? 'language-button selected-button'
              : 'language-button'
          }
          onClick={() => setSelectedLanguage('Tamil')}
        >
          Tamil{' '}
        </button>
        <button
          className={
            selectedLanguage === 'Telugu'
              ? 'language-button selected-button'
              : 'language-button'
          }
          onClick={() => setSelectedLanguage('Telugu')}
        >
          Telugu{' '}
        </button>
      </div>
      <div>
        <img
          src={greeting.imageUrl}
          alt={greeting.imageAltText}
          className="greeting-image"
        />
      </div>
    </div>
  )
}

export default App
