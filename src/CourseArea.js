import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import './CourseArea.css';

const CourseArea = ({ onLogout }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para menu hambúrguer

  // Dados mock das aulas
  const lessons = [
    { id: 1, title: '1 - Anatomia das Sobrancelhas', videoId: '741139774' }, // Vimeo ID exemplo
    { id: 2, title: '2 - Fio Guia', videoId: '741139821' },
    { id: 3, title: '3 - Fios de Inicio', videoId: '741139961' },
    { id: 4, title: '4 - Fios de transição', videoId: '741140032' },
    { id: 5, title: '5 - Fios Ascendentes e Descendentes', videoId: '741140079' },
    { id: 6, title: '6 - Fios Corpo e Cauda', videoId: '741140155' },
    { id: 7, title: '1º Forma - Fios longos (Esqueleto + Ramificação)', videoId: '777356721' },
    { id: 8, title: '2º Forma - Fios curtos por toda sobrancelha (criados de uma única vez)', videoId: '777363894' },
    { id: 9, title: '3º Forma - Fios curtos onde tem falha', videoId: '777360761' },
    { id: 10, title: 'Tipos de Sobrancelhas', videoId: '776767424' },
    { id: 11, title: 'Estudo de caso 1', videoId: '776740357' },
    { id: 12, title: 'Estudo de caso 2', videoId: '776743446' },
    { id: 13, title: 'Estudo de caso 3', videoId: '776746222' },
    { id: 14, title: 'Estudo de caso 4', videoId: '776748092' },
    { id: 15, title: 'Estudo de caso 5', videoId: '776749288' },
    { id: 16, title: 'Aula 1  - Edição completa (lightroom, beutyplus e airbrush)', videoId: '812534507' },
    { id: 17, title: 'Aula 2 - Edição completa (lightroom - airbrush - beautyplus)', videoId: '812532187' },
    { id: 18, title: 'Aula 3 - Correção do tom de pele', videoId: '812535975' },
    { id: 19, title: 'Aula 4 - Montagem das fotos.mp4', videoId: '813646458' },
    { id: 20, title: '(Bônus) Análise de perfil do instagram (@1bertocristovam)', videoId: '820910906' },
  ];

  useEffect(() => {
    // Carregar progresso do localStorage
    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) {
      setCompletedLessons(JSON.parse(savedProgress));
    }
  }, []);

  const handleLessonClick = (index) => {
    if (index !== currentLesson) {
      const videoContainer = document.querySelector('.video-container');
      videoContainer.classList.add('changing');
      setTimeout(() => {
        setCurrentLesson(index);
        videoContainer.classList.remove('changing');
      }, 300);
    }
    setIsSidebarOpen(false); // Fechar sidebar ao clicar em aula
  };

  const handleCompleteLesson = () => {
    if (!completedLessons.includes(currentLesson)) {
      const newCompleted = [...completedLessons, currentLesson];
      setCompletedLessons(newCompleted);
      localStorage.setItem('courseProgress', JSON.stringify(newCompleted));
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const currentVideo = lessons[currentLesson];

  return (
    <div className="course-area">
      <header className="header">
        <div className="header-left">
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>Vídeo Aulas</h1>
        </div>
        <div>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button onClick={onLogout} className="logout-btn">Sair</button>
        </div>
      </header>
      <div className="course-content">
        <div className="video-section">
          <div className="video-container">
            <iframe
              src={`https://player.vimeo.com/video/${currentVideo.videoId}`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={currentVideo.title}
            ></iframe>
          </div>
          <div className="lesson-info">
            <h2>{currentVideo.title}</h2>
            <p>Descrição da aula {currentLesson + 1}.</p>
            <button onClick={handleCompleteLesson} className="complete-btn">
              {completedLessons.includes(currentLesson) ? 'Concluído' : 'Marcar como Concluído'}
            </button>
          </div>
        </div>
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
          <div className="sidebar-content">
            <h3>Lista de Aulas</h3>
            <ul className="lesson-list">
              {lessons.map((lesson, index) => (
                <li
                  key={lesson.id}
                  className={`lesson-item ${index === currentLesson ? 'active' : ''} ${completedLessons.includes(index) ? 'completed' : ''}`}
                  onClick={() => handleLessonClick(index)}
                >
                  <span className="lesson-number">{index + 1}</span>
                  <span className="lesson-title">{lesson.title}</span>
                  {completedLessons.includes(index) && <span className="checkmark">✓</span>}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseArea;