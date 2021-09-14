
import './App.css';
import NewsList from './components/NewsList/NewsList';
import NewsListItem from './components/NewsList/NewsListItem';
import InsetItem from './components/Inset/InsetItem';
import Inset from './components/Inset/Inset';
import Exchange from './components/Exchange/Exchange';
import ExchangeItem from './components/Exchange/ExchangeItem';
import SearchInput from './components/Search/SearchInput';
import Adverisement from './components/Advertisement/Adverisement';
import Weather from './components/FooterInset/Weather';


export default function App() {

  return (
    <div className='App'>
      <Inset className="headerInsetContainer">
        <InsetItem className="link choosenLink">Сейчас в СМИ</InsetItem>
        <InsetItem className="link choosenLink">Сейчас в Москве</InsetItem>
        <InsetItem className="link choosenLink">Интересное</InsetItem>
      </Inset>
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
      <Inset className="headerInsetContainer inputInsetContainer">
        <InsetItem className="link inputInsetLink">Видео</InsetItem>
        <InsetItem className="link inputInsetLink">Картинки</InsetItem>
        <InsetItem className="link inputInsetLink">Новости</InsetItem>
        <InsetItem className="link inputInsetLink">Карты</InsetItem>
        <InsetItem className="link inputInsetLink">Маркет</InsetItem>
        <InsetItem className="link inputInsetLink">Переводчик</InsetItem>
        <InsetItem className="link inputInsetLink">Эфир</InsetItem>
        <InsetItem className="link inputInsetLink">ещё</InsetItem>
      </Inset>
      <SearchInput />
      <Adverisement />
      <Inset className="headerInsetContainer">
        <InsetItem className="link choosenLink">
          Погода
          <Weather />
        </InsetItem>
      </Inset>
    </div>
  );
}
