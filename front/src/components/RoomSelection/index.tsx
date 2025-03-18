import { Player } from "../App/index.tsx"
import * as S from "./styles.ts"

interface MenuProps {
    selectRoom: (room:number) => void
    updatePlayer: (player:Player) => void
}


export default function Menu({selectRoom,updatePlayer}:MenuProps){
    return(
        <S.Container>
            <S.Title>Selecione a sala</S.Title>
            <button onClick={() => selectRoom(1)}>Sala 1</button>
            <button onClick={() => selectRoom(2)}>Sala 2</button>
            <button onClick={() => selectRoom(3)}>Sala 3</button>

            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Foto"/>
            <button onClick={() => updatePlayer({id: 1, name: "teste", photoUrl: "teste"})}>Atualizar</button>
        </S.Container>
    )
}

