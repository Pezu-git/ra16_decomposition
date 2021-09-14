
import './App.css';
import NewsList from './components/NewsList/NewsList';
import NewsListItem from './components/NewsList/NewsListItem';
import HeaderInsetItem from './components/HeaderInset/HeaderInsetItem';
import HeaderInset from './components/HeaderInset/HeaderInset';
import Exchange from './components/Exchange/Exchange';
import ExchangeItem from './components/Exchange/ExchangeItem';
import SearchInput from './components/Search/SearchInput';
import Adverisement from './components/Advertisement/Adverisement';
import Weather from './components/FooterInset/Weather';


export default function App() {

  return (
    <div className='App'>
      <HeaderInset className="headerInsetContainer">
        <HeaderInsetItem className="link choosenLink">Сейчас в СМИ</HeaderInsetItem>
        <HeaderInsetItem className="link choosenLink">Сейчас в Москве</HeaderInsetItem>
        <HeaderInsetItem className="link choosenLink">Интересное</HeaderInsetItem>
      </HeaderInset>
      <NewsList className="newsListContainer">
        <NewsListItem className="newsListItem">Путин не исключил уход на карантин из-за болеющих коронавирусом в его окружении</NewsListItem>
        <NewsListItem className="newsListItem">В крови погибших от отравления арбузом в Москве нашли следы этиленгликоля</NewsListItem>
        <NewsListItem className="newsListItem">Россия возобновит авиасообщение с Испанией, Ираком, Кенией и Словакией</NewsListItem>
        <NewsListItem className="newsListItem">Путин поручил проиндексировать зарплату военным и правоохранителям в 2022-2023 годах</NewsListItem>
        <NewsListItem className="newsListItem">Мэр Москвы Собянин объявил о начале отопительного сезона</NewsListItem>
      </NewsList>
      <Exchange className="exchangeContainer">
        <ExchangeItem className="exchangeItem">USD MOEX 63,52</ExchangeItem>
        <ExchangeItem className="exchangeItem">EUR MOEX 70,86</ExchangeItem>
        <ExchangeItem className="exchangeItem">НЕФТЬ 64,90</ExchangeItem>
      </Exchange>
      <HeaderInset className="headerInsetContainer inputInsetContainer">
        <HeaderInsetItem className="link inputInsetLink">Видео</HeaderInsetItem>
        <HeaderInsetItem className="link inputInsetLink">Картинки</HeaderInsetItem>
        <HeaderInsetItem className="link inputInsetLink">Новости</HeaderInsetItem>
        <HeaderInsetItem className="link inputInsetLink">Карты</HeaderInsetItem>
        <HeaderInsetItem className="link inputInsetLink">Маркет</HeaderInsetItem>
        <HeaderInsetItem className="link inputInsetLink">Переводчик</HeaderInsetItem>
        <HeaderInsetItem className="link inputInsetLink">Эфир</HeaderInsetItem>
        <HeaderInsetItem className="link inputInsetLink">ещё</HeaderInsetItem>
      </HeaderInset>
      <SearchInput />
      <Adverisement />
      <HeaderInset className="headerInsetContainer">
        <HeaderInsetItem className="link choosenLink">
          Погода
          <Weather/>
        </HeaderInsetItem>
      </HeaderInset>
    </div>
  );
}
