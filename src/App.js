
import './App.css';
import NewsList from './components/NewsList/NewsList';
import NewsListItem from './components/NewsList/NewsListItem';
import HeaderInsetItem from './components/HeaderInset/HeaderInsetItem';
import HeaderInset from './components/HeaderInset/HeaderInset';
import Exchange from './components/Exchange/Exchange';
import ExchangeItem from './components/Exchange/ExchangeItem';
import SearchInput from './components/Search/SearchInput';
import SearchInset from './components/Search/SearchInset';
import SearchInsetItem from './components/Search/SearchInsetItem';




export default function App() {

  return (
    <div className='App'>
      <HeaderInset >
        <HeaderInsetItem>Сейчас в СМИ</HeaderInsetItem>
        <HeaderInsetItem>Сейчас в Москве</HeaderInsetItem>
        <HeaderInsetItem>Интересное</HeaderInsetItem>
      </HeaderInset>
      <NewsList>
        <NewsListItem>Путин не исключил уход на карантин из-за болеющих коронавирусом в его окружении</NewsListItem>
        <NewsListItem>В крови погибших от отравления арбузом в Москве нашли следы этиленгликоля</NewsListItem>
        <NewsListItem>Россия возобновит авиасообщение с Испанией, Ираком, Кенией и Словакией</NewsListItem>
        <NewsListItem>Путин поручил проиндексировать зарплату военным и правоохранителям в 2022-2023 годах</NewsListItem>
        <NewsListItem>Мэр Москвы Собянин объявил о начале отопительного сезона</NewsListItem>
      </NewsList>
      <Exchange>
        <ExchangeItem>USD MOEX 63,52</ExchangeItem>
        <ExchangeItem>EUR MOEX 70,86</ExchangeItem>
        <ExchangeItem>НЕФТЬ 64,90</ExchangeItem>
      </Exchange>
      <SearchInset>
        <SearchInsetItem>Видео</SearchInsetItem>
        <SearchInsetItem>Картинки</SearchInsetItem>
        <SearchInsetItem>Новости</SearchInsetItem>
        <SearchInsetItem>Карты</SearchInsetItem>
        <SearchInsetItem>Маркет</SearchInsetItem>
        <SearchInsetItem>Переводчик</SearchInsetItem>
        <SearchInsetItem>Эфир</SearchInsetItem>
        <SearchInsetItem>ещё</SearchInsetItem>
      </SearchInset>
      <SearchInput />
      
    </div>
  );
}
