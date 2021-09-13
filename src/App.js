
import './App.css';
import NewsList from './components/NewsList/NewsList';
import NewsListItem from './components/NewsList/NewsListItem';
import CoriousNews from './components/HeaderInset/CuriousNews';
import LocalNews from './components/HeaderInset/LocalNews';
import NowInNews from './components/HeaderInset/NowInNews';
import HeaderInset from './components/HeaderInset/HeaderInset';

export default function App() {
  return (
    <div className='App'>
      <HeaderInset >
        <NowInNews>Сейчас в СМИ</NowInNews>
        <LocalNews>Сейчас в Москве</LocalNews>
        <CoriousNews>Интересное</CoriousNews>
      </HeaderInset>
      <NewsList>
        <NewsListItem>Путин не исключил уход на карантин из-за болеющих коронавирусом в его окружении</NewsListItem>
        <NewsListItem>В крови погибших от отравления арбузом в Москве нашли следы этиленгликоля</NewsListItem>
        <NewsListItem>Россия возобновит авиасообщение с Испанией, Ираком, Кенией и Словакией</NewsListItem>
        <NewsListItem>Путин поручил проиндексировать зарплату военным и правоохранителям в 2022-2023 годах</NewsListItem>
        <NewsListItem>Мэр Москвы Собянин объявил о начале отопительного сезона</NewsListItem>
      </NewsList>
    </div>
  );
}
