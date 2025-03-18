import { Player } from "../App/index.tsx"
import * as S from "./styles.ts"

interface LoginProps {
    login: (player:Player) => void
}

export default function Login({login}:LoginProps){
    return(
        <S.Container>
            <S.Title>Truco</S.Title>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Foto"/>
            <button onClick={() => login({id: 1, name: "teste", photoUrl: "teste"})}>Entrar</button>
        </S.Container>
    )
}

