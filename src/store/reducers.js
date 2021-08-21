import {
  LOCK,
  OPEN_CARD,
  SET_MATCH,
  CLOSE_CARDS,
  CLOSE_VICTORY_DIALOG,
  START_GAME,
} from "./actions";
import ListBuilder from "../builders/ListBuilder";

const initialState = {
  isLocked: false,
  isVictoryDialogOpen: false,
  cards: new ListBuilder().createList(3).shufle().build(),
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isLocked: false,
        isVictoryDialogOpen: false,
        cards: new ListBuilder().createList(3).shufle().build(),
      };
    case CLOSE_VICTORY_DIALOG:
      return {
        ...state,
        isLocked: true,
        isVictoryDialogOpen: false,
      };
    case LOCK: {
      return {
        ...state,
        isLocked: true,
      };
    }
    case OPEN_CARD:
      const cards = state.cards.slice();

      cards[action.index].isActive = true;

      return {
        ...state,
        cards,
      };
    case SET_MATCH: {
      const cards = state.cards.slice();

      let isVictoryDialogOpen = false;

      cards[action.index1].hasMatch = true;
      cards[action.index2].hasMatch = true;

      if (cards.every((c) => c.hasMatch)) {
        isVictoryDialogOpen = true;
      }

      return {
        ...state,
        isVictoryDialogOpen,
        cards,
      };
    }
    case CLOSE_CARDS: {
      const cards = state.cards.slice();

      cards[action.index1].isActive = false;
      cards[action.index2].isActive = false;

      return {
        ...state,
        isLocked: false,
        cards,
      };
    }
    /*case "SELECT_CARD": {
        // Original list never must be changed
        // On Redux the previous state never must be changed
        const cards = state.cards.slice();
  
        const index = cards.findIndex((c) => c.key === action.key);
        const otherCardIndex = cards.findIndex((c) => c.isActive && !c.hasMatch);
  
        // if card was found
        if (index > -1) {
          if (cards[index].isActive) {
            return state;
          }
  
          if (otherCardIndex > -1) {
            if (cards[index].id === cards[otherCardIndex].id) {
              cards[index].isActive = true;
              cards[index].hasMatch = true;
              cards[otherCardIndex].hasMatch = true;
            } else {
              cards[otherCardIndex].isActive = false;
            }
          } else {
            // We can turn the card only once, so we can change to true
            cards[index].isActive = true;
          }
        }
  
        return {
          ...state,
          cards,
        };
      }*/

    default:
      return state;
  }
};

export default gameReducer;
