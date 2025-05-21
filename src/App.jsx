import Navbar from './components/Navbar/Navbar'
import PhotoSlider from './components/PhotoSlider/PhotoSlider'
import './App.css'
import { useLanguage } from './context/Lang.jsx'
import { text } from './content/text.jsx'
import Footer from './components/Footer/Footer';


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

     <section id="about" className="about-section">
     <div className="bg-blur" />
     <div className="content">
     
      <h2 className="about-title">{t.about.title}</h2>
     <br /><br />

     <p dangerouslySetInnerHTML={{ __html: t.about.content.replace(/\n/g, '<br />') }} />

     </div>
     </section>

      <section id="team">
      

      <h2 style={{
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
       }}>{t.team.title}</span>
     </h2>
      <div className="team-container">
          <br /><br />
          
          {t.team.content}
      </div>
      </section>



      

      <section id="worship">
    
        <h2 style={{
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
       }}>{t.worship.title}</span>
     </h2>
         <div className="team-container">
          <br /><br />
          
          {t.worship.content}
      </div>
      </section>




      <Footer t={t} />
          {/* 蓝条 */}
      <div style={{
        height: '30px',
        backgroundColor: '#2c3e50',
        width: '100%',
      }}></div>

    
    </div>
    
  )
}

export default App
