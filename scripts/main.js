import cardSearchComponent from "./cardSearch.js";
import cardSearchList from "./cardSearchList.js";
import cardListComponent from "./cardList.js";
import { getMyCards } from "./cardProvider.js";


cardSearchComponent()
getMyCards().then(cardListComponent)
cardSearchList()