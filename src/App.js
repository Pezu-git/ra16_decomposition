
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
import Television from './components/FooterInset/Television';
       
const headerInsetItems = ['Сейчас в СМИ', 'Сейчас в Москве', 'Интересное']
const exchangeItem = ['USD MOEX 63,52', 'EUR MOEX 70,86', 'НЕФТЬ 64,90']
const inputInsetItems = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё']
const newsListItems = [
  'Путин не исключил уход на карантин из-за болеющих коронавирусом в его окружении',
  'В крови погибших от отравления арбузом в Москве нашли следы этиленгликоля',
  'Россия возобновит авиасообщение с Испанией, Ираком, Кенией и Словакией',
  'Путин поручил проиндексировать зарплату военным и правоохранителям в 2022-2023 годах',
  'Мэр Москвы Собянин объявил о начале отопительного сезона'
]



export default function App() {

  return (
    <div className='App'>
      
      <Inset className="headerInsetContainer">
        <InsetItem className="link headerLink" itemClass="wiget">{headerInsetItems}</InsetItem>
      </Inset>
      <NewsList className="newsListContainer">
        <NewsListItem className="newsListItem">{newsListItems}</NewsListItem>
      </NewsList>
      <Exchange className="exchangeContainer">
        <ExchangeItem className="exchangeItem">{exchangeItem}</ExchangeItem>
      </Exchange>
      <Inset className="headerInsetContainer inputInsetContainer">
        <InsetItem className="link inputInsetLink">{inputInsetItems}</InsetItem>
      </Inset>
      <SearchInput />
      <Adverisement />
      
      <Inset className="footerInsetContainer">
        <InsetItem className="link" itemClass="footerWidget">
          Погода
          <Weather />
        </InsetItem>
        <InsetItem className="link" itemClass="footerWidget">
          Телепрограмма
          <Television />
        </InsetItem>
      </Inset>
      
    </div>
  );
}
