import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    {
      icon: 'GraduationCap',
      title: 'Cambridge CELTA',
      organization: 'University of Cambridge',
      year: '2020'
    },
    {
      icon: 'Award',
      title: 'TESOL Certificate',
      organization: 'Arizona State University',
      year: '2019'
    },
    {
      icon: 'Globe',
      title: 'IELTS Examiner',
      organization: 'British Council',
      year: '2021'
    }
  ];

  const qualifications = [
    {
      degree: 'Магистр педагогических наук',
      field: 'Преподавание иностранных языков',
      institution: 'МГУ им. М.В. Ломоносова',
      year: '2018'
    },
    {
      degree: 'Бакалавр филологии',
      field: 'Английский язык и литература',
      institution: 'МПГУ',
      year: '2016'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-primary">English Teacher Portfolio</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'qualifications', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'qualifications' && 'Квалификация'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary leading-tight">
                Профессиональное преподавание английского языка
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Преподаватель английского языка с индивидуальным подходом к каждому ученику
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="text-base">
                  Связаться со мной
                </Button>
                <Button onClick={() => scrollToSection('qualifications')} variant="outline" size="lg" className="text-base">
                  Моя квалификация
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/92c58b10-d1f1-4459-b2fd-62d00032452f/files/f29a2a07-efd0-4b46-8857-cb0ee2c880fc.jpg"
                alt="English Teacher"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-primary mb-8 text-center">Обо мне</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Добро пожаловать! Меня зовут Дарья, и я преподаю английский язык более 4 лет.
            </p>
            <p>
              За годы работы я помог более 200 студентам достичь своих целей: от подготовки к международным 
              экзаменам до свободного владения языком для работы и путешествий. Я убежден, что каждый студент 
              уникален, и применяю индивидуальный подход, адаптируя методику под потребности и темп обучения.
            </p>
            <p>
              Моя философия преподавания основана на создании комфортной атмосферы, где ошибки — это часть 
              естественного процесса обучения. Я использую современные методики, аутентичные материалы и 
              интерактивные технологии, чтобы сделать изучение языка увлекательным и эффективным.
            </p>
          </div>
        </div>
      </section>

      <section id="qualifications" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">Квалификация</h2>
          <div className="space-y-6">
            {qualifications.map((qual, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon name="BookOpen" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-semibold text-primary mb-2">{qual.degree}</h3>
                      <p className="text-lg text-accent mb-2">{qual.field}</p>
                      <div className="flex items-center justify-between text-muted-foreground">
                        <p>{qual.institution}</p>
                        <p className="font-semibold">{qual.year}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 text-center">Достижения и сертификаты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Международные сертификации и профессиональные достижения
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                    <Icon name={achievement.icon as any} size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.organization}</p>
                  <p className="text-sm font-semibold text-accent">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Свяжитесь со мной</h2>
          <p className="text-xl mb-12 opacity-90">
            Готовы начать изучение английского языка? Буду рад ответить на ваши вопросы!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-2">
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <p className="font-semibold">Email</p>
              <p className="opacity-90">teacher@example.com</p>
            </div>
            <div className="space-y-2">
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <p className="font-semibold">Телефон</p>
              <p className="opacity-90">+7 (999) 123-45-67</p>
            </div>
            <div className="space-y-2">
              <Icon name="MessageCircle" size={32} className="mx-auto mb-4" />
              <p className="font-semibold">Telegram</p>
              <p className="opacity-90">@english_teacher</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="text-primary">
            Записаться на пробный урок
          </Button>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-90">© 2024 English Teacher Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;