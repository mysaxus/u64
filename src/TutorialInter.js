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
            <h1>N??vel intermedi??rio</h1>
        </div>
        <div className="box">
            <p>
                Voc?? est?? acessando a p??gina de n??vel intermedi??rio de xadrez. 
                Os tutoriais dessa p??gina s??o sobre exerc??cios t??ticos e sobre 
                estrat??gia b??sica de jogo. Nessa se????o, voc?? vai estar atento para 
                os perigos mais superficiais e como ganhar de escorreg??es de advers??rios.
            </p>

            <p>
                Quando voc?? acumular pontos suficientes em seu rating,
                o site vai automaticamente elevar seu n??vel de jogo e tutoriais 
                mais complexos vir??o, a medida em que sua melhora seja percebida nos exerc??cios mostrados.
            </p>
        </div>

        <h2>T??ticas</h2>

        <div className="box">
            <p>
                Nesta se????o, vamos ensinar t??ticas de xadrez. 
                Os tabuleiros ter??o casas circuladas em verde, indicando at?? onde 
                determinada pe??a pode se movimentar na posi????o em que est??. Haver?? um tabuleiro 
                experimental no final onde voc?? poder?? testar e usar as pe??as da forma como quiser.
            </p>
        </div>

        <h2>Ataque duplo</h2>
        <div className="topic">
            <img src={doubleatk} />
            
            <div className="box">
                <p>
                    A primeira t??tica e a mais b??sica ?? o ataque duplo. 
                    Como cada jogador s?? pode fazer um lance por turno, ao fazer um ataque duplo, 
                    voc?? cria duas amea??as que n??o poder??o ser mutuamente respondidas. Isso gera uma 
                    vantagem material inevit??vel contra o advers??rio se ele n??o estiver atento. Como 
                    exemplo cl??ssico, temos um duplo feito com o cavalo.
                </p>
            </div>
        </div>

        <h2>Cravada</h2>
        <div className="topic">
            <img src={pin} />
            
            <div className="box">
                <p>
                    Uma t??tica que pode ganhar jogos inteiros ?? a cravada. 
                    Esta t??tica ocorre quando uma pe??a n??o pode se mover de seu 
                    lugar ao ser atacada por outra pe??a, porque seria um lance ilegal 
                    ou porque iria custar ao advers??rio mais do que n??o mover tal pe??a. 
                    Uma cravada cl??ssica ?? uma rainha com seu pr??prio rei. O advers??rio 
                    n??o pode mover a rainha nesse caso, pois deixaria seu rei em xeque. A 
                    perda da rainha ?? inevit??vel.
                </p>
            </div>
        </div>

        <h2>Garfo</h2>
        <div className="topic">
            <img src={fork} />
            
            <div className="box">
                <p>
                    O garfo ?? um tipo espec??fico de 
                    ataque duplo feito com um pe??o. Isso mesmo, 
                    um pe??o. A situa????o ocorre de forma mais frequente 
                    do que se imagina, principalmente no in??cio e no fim do jogo, 
                    onde essas pe??as s??o mais utilizadas. Garfos costumam ganhar a partida 
                    de vez, j?? que a troco de um pe??o, ganha-se uma pe??a inteira, trazendo vantagem 
                    material decisiva pro jogador.
                </p>
            </div>
        </div>

        <h2>Espeto</h2>
        <div className="topic">
            <img src={spit} />
            
            <div className="box">
                <p>
                    Espetos s??o uma das t??ticas mais f??ceis de evitar e uma 
                    das mais dolorosas de sofrer. Um espeto ?? quando uma pe??a ataca outra, 
                    mas ataca indiretamente uma outra pe??a caso a primeira que est?? atacada se 
                    mova. Geralmente ocorre com bispos ou com torres que fazem espetos com xeque 
                    em algum rei. Trazem vantagem decisiva pro jogador que executa esta t??tica.
                </p>
            </div>
        </div>

        <h2>Desvio</h2>
        <div className="topic">
            <img src={detour} />
            
            <div className="box">
                <p>
                    O desvio ?? uma das t??ticas mais complexas. 
                    Ocorre quando um jogador desvia o defensor de duas pe??as, 
                    obrigando-o a capturar uma delas e deixando a outra sem defesa.
                    No exemplo ao lado, as brancas podem capturar o bispo das negras, 
                    desviando um dos cavalos negros de proteger o outro. As negras n??o tem 
                    op????o sen??o recapturar o bispo ou manter o cavalo defensor imobilizado. 
                    Nos dois resultados, perderam uma pe??a inteira a troco de nada. 
                </p>
            </div>
        </div>

        <h2>Ataque descoberto</h2>
        <div className="topic">
            <img src={discover} />
            
            <div className="box">
                <p>
                    Outra t??tica complexa ?? 
                    o ataque descoberto. Esta t??tica 
                    ocorre quando uma pe??a faz um ataque ao rei 
                    advers??rio ou a outra pe??a valiosa ao mover 
                    uma pe??a que antes cobria esse ataque. No exemplo ao lado, 
                    o bispo das brancas captura o bispo das negras, abrindo um xeque 
                    descoberto da torre ao rei. Embora o bispo estivesse defendido, as 
                    negras precisam reagir ao xeque, dando o tempo que as brancas precisavam 
                    para retirar o bispo da amea??a do cavalo e sair com uma pe??a limpa a mais.
                </p>
            </div>
        </div>

        <h2>Sobrecarga</h2>
        <div className="topic">
            <img src={overload} />
            
            <div className="box">
                <p>
                    A sobrecarga, diferentemente das outras t??ticas, 
                    ??o ocorre com tanta frequ??ncia e ?? necess??ria certa 
                    perspic??cia para perceber a oportunidade de us??-la. 
                    Ocorre quando uma pe??a se torna indefens??vel por conta da 
                    sobrecarga de ataques em cima dela. No exemplo, ao concentrar 
                    um ataque triplo no bispo com a torre, as negras n??o conseguem 
                    mais defender sua pe??a de nenhuma forma. Se o bispo sair de sua casa, 
                    ent??o a rainha est?? perdida. Neste exemplo, temos uma sobrecarga, uma 
                    cravada e um espeto ocorrendo todos ao mesmo tempo!
                </p>
            </div>
        </div>

        <h2>Ataque de xeque-mate</h2>
        <div className="topic">
            <img src={mate} />
            
            <div className="box">
                <p>
                    A amea??a de xeque-mate ?? uma das t??ticas mais seguras e eficientes do jogo, 
                    por n??o exigir tanto c??lculo. Ocorre quando um jogador se aproveita da amea??a 
                    de xeque-mate que pode fazer com um lance e cria uma segunda amea??a com esse 
                    mesmo lance. No exemplo ao lado, com um lance de rainha, as brancas amea??am 
                    xeque-mate e atacam o bispo n??o defendido ao mesmo tempo. O jogador das negras 
                    n??o tem op????o sen??o reagir a amea??a de xeque-mate, perdendo seu bispo.
                </p>
            </div>
        </div>

        <div className="practice">
        {question ? (
                    <div>
                        <div className="box result">
                            <h2>Quest??es finalizadas</h2>
                            <p>Pontua????o alcan??ada: {score} de {questions.length}</p>
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
                        <h2>Quest??o {currentQuestion + 1}</h2>
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