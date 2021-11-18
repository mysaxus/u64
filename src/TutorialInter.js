import React, {useState, useEffect} from 'react';

import './stylesheets/tutorial.css';
import './stylesheets/tutorialtest.css';

import q1intermediario from './images/questoes/intermediario/questoes/q1intermediario.png';
import q2intermediario from './images/questoes/intermediario/questoes/q2intermediario.png';
import q3intermediario from './images/questoes/intermediario/questoes/q3intermediario.png';
import q4intermediario from './images/questoes/intermediario/questoes/q4intermediario.png';

import doubleatk from './images/questoes/intermediario/doubleatk.png';
import pin from './images/questoes/intermediario/pin.png';
import spit from './images/questoes/intermediario/spit.png';
import fork from './images/questoes/intermediario/fork.png';
import overload from './images/questoes/intermediario/overload.png';
import mate from './images/questoes/intermediario/mate.png';
import detour from './images/questoes/intermediario/detour.png';
import discover from './images/questoes/intermediario/discover.png';

import {db} from './services/firebase';
import { collection, getDocs, updateDoc, doc} from 'firebase/firestore';
import { useAuth } from './contexts/AuthContext';


export default function TutorialInter(){

    const {currentUser } = useAuth();
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    useEffect(() =>  {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();
    }, [])


    const questions = [
        {
            Img:[q1intermediario],
            Options: [
                {Text:'Tb8', isCorrect: false},
                {Text:'Td8', isCorrect: true},
                {Text:'Txc7', isCorrect: false},
                {Text:'Ta8', isCorrect: false},
            ],
        },
        {
            Img:[q2intermediario],
            Options: [
                {Text:'De6', isCorrect: false},
                {Text:'f3', isCorrect: false},
                {Text:'c5', isCorrect: false},
                {Text:'Df3', isCorrect: true},
            ],
        },
        {
            Img:[q3intermediario],
            Options: [
                {Text:'Dd8', isCorrect: false},
                {Text:'gxh6+', isCorrect: true},
                {Text:'Tbd8', isCorrect: false},
                {Text:'Dxe6', isCorrect: false},
            ],
        },
        {
            Img:[q4intermediario],
            Options: [
                {Text:'Rxd1+', isCorrect: true},
                {Text:'Tac8', isCorrect: false},
                {Text:'Te8', isCorrect: false},
                {Text:'Dxe3+', isCorrect: false},
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [question, setQuestion] = useState(false);

    const [score, setScore] = useState(0);

    const [gain, setGain] = useState(0);

    var rating = '';

    const ranking = (x) => {
        if(x < 1000){
            return "Peao"
        }
        else if(x < 1200){
            return "Cavalo"
        }
        else if(x < 1500){
            return "Bispo"
        }
        else if(x < 1700){
            return "Torre"
        }
        else if(x < 2000){
            return "Rainha"
        }
        else{
            return "Rei"
        }
    }

    const handleNextQuestion = (isCorrect) => {
        if(isCorrect===true){
            setGain(gain + 10)
            setScore(score + 1);
        }
        else{
            setGain(gain - 10)
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setQuestion(true);
        }
    }

    return(
        <div className="tutorial inter">
        <div className="header">
            <h1>Nível intermediário</h1>
        </div>
        <div className="box">
            <p>
                Você está acessando a página de nível intermediário de xadrez. 
                Os tutoriais dessa página são sobre exercícios táticos e sobre 
                estratégia básica de jogo. Nessa seção, você vai estar atento para 
                os perigos mais superficiais e como ganhar de escorregões de adversários.
            </p>

            <p>
                Quando você acumular pontos suficientes em seu rating,
                o site vai automaticamente elevar seu nível de jogo e tutoriais 
                mais complexos virão, a medida em que sua melhora seja percebida nos exercícios mostrados.
            </p>
        </div>

        <h2>Táticas</h2>

        <div className="box">
            <p>
                Nesta seção, vamos ensinar táticas de xadrez. 
                Os tabuleiros terão casas circuladas em verde, indicando até onde 
                determinada peça pode se movimentar na posição em que está. Haverá um tabuleiro 
                experimental no final onde você poderá testar e usar as peças da forma como quiser.
            </p>
        </div>

        <h2>Ataque duplo</h2>
        <div className="topic">
            <img src={doubleatk} />
            
            <div className="box">
                <p>
                    A primeira tática e a mais básica é o ataque duplo. 
                    Como cada jogador só pode fazer um lance por turno, ao fazer um ataque duplo, 
                    você cria duas ameaças que não poderão ser mutuamente respondidas. Isso gera uma 
                    vantagem material inevitável contra o adversário se ele não estiver atento. Como 
                    exemplo clássico, temos um duplo feito com o cavalo.
                </p>
            </div>
        </div>

        <h2>Cravada</h2>
        <div className="topic">
            <img src={pin} />
            
            <div className="box">
                <p>
                    Uma tática que pode ganhar jogos inteiros é a cravada. 
                    Esta tática ocorre quando uma peça não pode se mover de seu 
                    lugar ao ser atacada por outra peça, porque seria um lance ilegal 
                    ou porque iria custar ao adversário mais do que não mover tal peça. 
                    Uma cravada clássica é uma rainha com seu próprio rei. O adversário 
                    não pode mover a rainha nesse caso, pois deixaria seu rei em xeque. A 
                    perda da rainha é inevitável.
                </p>
            </div>
        </div>

        <h2>Garfo</h2>
        <div className="topic">
            <img src={fork} />
            
            <div className="box">
                <p>
                    O garfo é um tipo específico de 
                    ataque duplo feito com um peão. Isso mesmo, 
                    um peão. A situação ocorre de forma mais frequente 
                    do que se imagina, principalmente no início e no fim do jogo, 
                    onde essas peças são mais utilizadas. Garfos costumam ganhar a partida 
                    de vez, já que a troco de um peão, ganha-se uma peça inteira, trazendo vantagem 
                    material decisiva pro jogador.
                </p>
            </div>
        </div>

        <h2>Espeto</h2>
        <div className="topic">
            <img src={spit} />
            
            <div className="box">
                <p>
                    Espetos são uma das táticas mais fáceis de evitar e uma 
                    das mais dolorosas de sofrer. Um espeto é quando uma peça ataca outra, 
                    mas ataca indiretamente uma outra peça caso a primeira que está atacada se 
                    mova. Geralmente ocorre com bispos ou com torres que fazem espetos com xeque 
                    em algum rei. Trazem vantagem decisiva pro jogador que executa esta tática.
                </p>
            </div>
        </div>

        <h2>Desvio</h2>
        <div className="topic">
            <img src={detour} />
            
            <div className="box">
                <p>
                    O desvio é uma das táticas mais complexas. 
                    Ocorre quando um jogador desvia o defensor de duas peças, 
                    obrigando-o a capturar uma delas e deixando a outra sem defesa.
                    No exemplo ao lado, as brancas podem capturar o bispo das negras, 
                    desviando um dos cavalos negros de proteger o outro. As negras não tem 
                    opção senão recapturar o bispo ou manter o cavalo defensor imobilizado. 
                    Nos dois resultados, perderam uma peça inteira a troco de nada. 
                </p>
            </div>
        </div>

        <h2>Ataque descoberto</h2>
        <div className="topic">
            <img src={discover} />
            
            <div className="box">
                <p>
                    Outra tática complexa é 
                    o ataque descoberto. Esta tática 
                    ocorre quando uma peça faz um ataque ao rei 
                    adversário ou a outra peça valiosa ao mover 
                    uma peça que antes cobria esse ataque. No exemplo ao lado, 
                    o bispo das brancas captura o bispo das negras, abrindo um xeque 
                    descoberto da torre ao rei. Embora o bispo estivesse defendido, as 
                    negras precisam reagir ao xeque, dando o tempo que as brancas precisavam 
                    para retirar o bispo da ameaça do cavalo e sair com uma peça limpa a mais.
                </p>
            </div>
        </div>

        <h2>Sobrecarga</h2>
        <div className="topic">
            <img src={overload} />
            
            <div className="box">
                <p>
                    A sobrecarga, diferentemente das outras táticas, 
                    ão ocorre com tanta frequência e é necessária certa 
                    perspicácia para perceber a oportunidade de usá-la. 
                    Ocorre quando uma peça se torna indefensável por conta da 
                    sobrecarga de ataques em cima dela. No exemplo, ao concentrar 
                    um ataque triplo no bispo com a torre, as negras não conseguem 
                    mais defender sua peça de nenhuma forma. Se o bispo sair de sua casa, 
                    então a rainha está perdida. Neste exemplo, temos uma sobrecarga, uma 
                    cravada e um espeto ocorrendo todos ao mesmo tempo!
                </p>
            </div>
        </div>

        <h2>Ataque de xeque-mate</h2>
        <div className="topic">
            <img src={mate} />
            
            <div className="box">
                <p>
                    A ameaça de xeque-mate é uma das táticas mais seguras e eficientes do jogo, 
                    por não exigir tanto cálculo. Ocorre quando um jogador se aproveita da ameaça 
                    de xeque-mate que pode fazer com um lance e cria uma segunda ameaça com esse 
                    mesmo lance. No exemplo ao lado, com um lance de rainha, as brancas ameaçam 
                    xeque-mate e atacam o bispo não defendido ao mesmo tempo. O jogador das negras 
                    não tem opção senão reagir a ameaça de xeque-mate, perdendo seu bispo.
                </p>
            </div>
        </div>

        <div className="practice">
        {question ? (
                    <div>
                        <div className="box result">
                            <h2>Questões finalizadas</h2>
                            <p>Pontuação alcançada: {score} de {questions.length}</p>
                            <p>Ganho total: {gain}</p> 
                            {users.map((user) => {
                                if(user.email === currentUser.email){

                                    const userDoc = doc(db, "users", user.id)
                                    updateDoc(userDoc, {nivel: true})
                                    updateDoc(userDoc, {rating: user.rating + gain})
                            }})}
                            <a href="/account">Voltar para perfil</a>
                        </div>
                    </div>

                ) : (
                    <div>
                        <h2>Questão {currentQuestion + 1}</h2>
                        {users.map((user) => {
                                if(user.email === currentUser.email){
                                    rating = ranking(user.rating);
                                    return(<div className="rating">
                                        Rating Atual: {user.rating + gain} ({rating})
                                        </div>)
                                }
                            })}
                        <div className="questao">
                            <img src={questions[currentQuestion].Img}/>

                            <div className="options">
                                {questions[currentQuestion].Options.map((option) => (
                                    <button onClick={
                                        () => handleNextQuestion(option.isCorrect)} className="option">
                                            {option.Text}
                                            </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
        </div>
    </div>
    )
}