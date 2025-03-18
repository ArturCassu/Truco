import { useState } from "react"
import * as S from "./styles.ts"
import Menu from "../RoomSelection/index.tsx"
import Login from "../Login/index.tsx"
import Game from "../Game/index.tsx"
import {Card} from "../Game/components/Card";


export interface Player {
    id: number
    name: string
    room?: number
    photoUrl: string
    socket?: WebSocket
    hand?: Card[]
}

enum Page {
    LOGIN = 'login',
    MENU = 'menu',
    GAME = 'game'
}


export default function App(){
    
    const [player, setPlayer] = useState<Player>();
    const [page, setPage] = useState<string>(Page.LOGIN);
    let socket: WebSocket;

    function login(p:Player) {
        setPlayer(p)
        setPage(Page.MENU)
    }

    function updatePlayer(p:Player) {
        setPlayer(p)
    }

    function enterGame(room:number) {
        if(player){
            setPlayer({...player, room: room})
            socket = new WebSocket('wss://demo.piesocket.com/v3/channel_123')
            socket.addEventListener("open", () => {
                setPlayer({...player, socket})
                setPage(Page.GAME)
            });
        }
    }

    function leaveRoom() {
        if(player){
            setPlayer({...player, room: undefined})
            socket.close()
            setPlayer({...player, socket: undefined})
            setPage(Page.MENU)
        }
    }

    const renderPage = () => {
        switch (page) {
            case Page.LOGIN:
                return <Login login={login} />;
            case Page.MENU:
                return <Menu selectRoom={enterGame} updatePlayer={updatePlayer}/>;
            case Page.GAME:
                return <Game leaveRoom={leaveRoom} player={player!}/>;
            default:
                return null;
        }
    };

    return(
        <S.Container>{renderPage()}</S.Container>
    )
}
