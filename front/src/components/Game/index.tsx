import { Player } from "../App/index.tsx"
import * as S from "./styles.ts"
import {Card} from "./components/Card";

interface GameProps {
    player: Player
    leaveRoom: () => void
}

interface GameState {
    cards: Map<string, Card[]>
    manilha: string
}


export default function Game({player, leaveRoom}:GameProps){
    let game: GameState = {
        cards: new Map(
            [
                ["jogador1", [{name: "carta", uri: "carta.png"}]],
                ["jogador2", [{name: "carta", uri: "carta.png"}]],
                ["jogador3", [{name: "carta", uri: "carta.png"}]],
                ["jogador4", [{name: "carta", uri: "carta.png"}]]
            ],
        ),
        manilha: "carta"
    }

    function playCard(){
        player.socket?.send(JSON.stringify({}))
    }



    return(
        <S.Container>
            <S.Title>Truco</S.Title>
            <p>Player: {player.name}</p>
            <p>Room: {player.room}</p>
            <button onClick={() => player.room?leaveRoom():null}>Sair</button>
        </S.Container>
    )
}

