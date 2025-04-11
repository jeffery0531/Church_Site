import Navbar from './components/Navbar/Navbar'
import PhotoSlider from './components/PhotoSlider/PhotoSlider'
import './App.css'
import { useLanguage } from './context/Lang.jsx'
import { text } from './content/text.jsx'
function App() {
  const { language } = useLanguage();
  const t = text[language];
  return (
    
    <div style={{ width: '100%' }}>
      
      {/* 蓝条 */}
      <div style={{
        height: '30px',
        backgroundColor: '#2c3e50',
        width: '100%',
      }}></div>
    
      {/* 导航栏 */}
      <Navbar />

      {/* 轮播图 */}
      <PhotoSlider />

      {/* 欢迎板块 */}
      <h1 style={{
       textAlign: 'center',
       fontWeight: 'bold',
       fontSize: '2em',
       borderBottom: '2px solid #333',
       lineHeight: '0.1em',
       margin: '40px 0',
       color: '#333'
     }}>
       <span style={{
         background: '#fff',
         padding: '0 10px'
       }}>Welcome</span>
     </h1>

     <section id="about">
        <h2>{t.about.title}</h2>
        <p>{t.about.content}</p>
      </section>

      <section id="team">
        <h2>{t.team.title}</h2>
        <p>{t.team.content}</p>
      </section>

      <section id="worship">
        <h2>{t.worship.title}</h2>
        <p>{t.worship.content}</p>
      </section>

      <section id="bible-study">
        <h2>{t.bible.title}</h2>
        <p>{t.bible.content}</p>
      </section>

      <section id="email">
        <h2>{t.email.title}</h2>
        <p>{t.email.content.includes('@') ? <a href="mailto:example@church.org">{t.email.content}</a> : t.email.content}</p>
      </section>

      <section id="address">
        <h2>{t.address.title}</h2>
        <p>{t.address.content}</p>
      </section>



    
    </div>
    
  )
}

export default App
