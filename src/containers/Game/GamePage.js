import React from "react";
import { Board, Card, VictoryDialog } from "../../components";
import { connect } from "react-redux";

import { closeVictoryDialog, selectCard, startGame } from "../../store/actions";

const GamePage = ({
  cards,
  onCardClick,
  isVictoryDialogOpen,
  onCloseVictoryDialog,
  onStartGame,
}) => (
  <>
    <Board>
      {cards.map((card) => (
        <Card
          key={card.key}
          name={card.name}
          isActive={card.isActive}
          onClick={() => {
            onCardClick(card.key);
          }}
        />
      ))}
    </Board>
    <VictoryDialog
      isOpen={isVictoryDialogOpen}
      onClose={onCloseVictoryDialog}
      onGameRestart={onStartGame}
    />
  </>
);

const mapStateToProps = (state) => ({
  cards: state.cards,
  isVictoryDialogOpen: state.isVictoryDialogOpen,
});

/*const mapDispatchToProps = (dispatch) => ({
  onCardClick: (card) => {
    // Before separe by files
    //dispatch({ type: "SELECT_CARD", key: card.key });
    dispatch(selectCard(card.key));
  },
});*/

const mapDispatchToProps = {
  onCardClick: selectCard,
  onCloseVictoryDialog: closeVictoryDialog,
  onStartGame: startGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
