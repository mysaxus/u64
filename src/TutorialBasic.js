import React, {useState, useEffect} from 'react';

import './stylesheets/tutorial.css';
import './stylesheets/tutorialtest.css';

import q1basico from './images/questoes/basico/questoes/q1basico.png';
import q2basico from './images/questoes/basico/questoes/q2basico.png';
import q3basico from './images/questoes/basico/questoes/q3basico.png';
import q4basico from './images/questoes/basico/questoes/q4basico.png';

import peao from './images/questoes/basico/peao.png';
import cavalo from './images/questoes/basico/cavalo.png';
import bispo from './images/questoes/basico/bispo.png';
import torre from './images/questoes/basico/torre.png';
import rainha from './images/questoes/basico/rainha.png';
import rei from './images/questoes/basico/rei.png';

import {db} from './services/firebase';
import { collection, getDocs, updateDoc, doc} from 'firebase/firestore';
import { useAuth } from './contexts/AuthContext';


export default function TutorialBasic(){

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
            Img:[q1basico],
            Options: [
                {Text:'Cg5+', isCorrect: false},
                {Text:'Cxe5', isCorrect: false},
                {Text:'De4+', isCorrect: true},
                {Text:'h3', isCorrect: false},
            ],
        },
        {
            Img:[q2basico],
            Options: [
                {Text:'Td6', isCorrect: false},
                {Text:'g4', isCorrect: false},
                {Text:'Tac1', isCorrect: false},
                {Text:'Td8+', isCorrect: true},
            ],
        },
        {
            Img:[q3basico],
            Options: [
                {Text:'Bxf3', isCorrect: false},
                {Text:'Bxd3', isCorrect: true},
                {Text:'d5', isCorrect: false},
                {Text:'Db6', isCorrect: false},
            ],
        },
        {
            Img:[q4basico],
            Options: [
                {Text:'Dxf8+', isCorrect: true},
                {Text:'De8', isCorrect: false},
                {Text:'Td8', isCorrect: false},
                {Text:'Td7', isCorrect: false},
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
        <div className="tutorial basic">
            <div className="header">
                <h1>N??vel b??sico</h1>
            </div>

            <div className="box">
                <p>Voc?? est?? acessando a p??gina de n??vel b??sico de xadrez. 
                Os tutoriais dessa p??gina s??o os mais simples e visam ensinar o b??sico do xadrez. 
                N??o se preocupe em entender tudo de uma vez, pois s?? com a pr??tica ser?? poss??vel 
                treinar o que voc?? ver?? aqui. N??o tenha pressa em subir de n??vel, pois todos precisam 
                dos conhecimentos que voc?? vai aprender da base, que ?? esta.</p>

                <p>Quando voc?? acumular pontos suficientes em seu rating, o site vai automaticamente 
                elevar seu n??vel de jogo e tutoriais mais complexos vir??o, a medida em que sua melhora
                seja percebida nos exerc??cios mostrados.</p>
            </div>

            <h2>Movimento das pe??as</h2>

            <div className="box">
                <p>Nesta se????o, vamos ensinar o movimento das pe??as. Os tabuleiros ter??o casas circuladas em verde, 
                indicando at?? onde determinada pe??a pode se movimentar na posi????o em que est??. Haver?? um tabuleiro 
                experimental no final onde voc?? poder?? testar e usar as pe??as da forma como quiser.</p>
            </div>

            <h2>Pe??o</h2>
            <div className="topic">
                <img src={peao}/>
                <div className="box">
                    <p>O pe??o ?? a pe??a mais abundante do xadrez. 
                    Cada jogador come??a com 8 deles (cada um valendo 1 ponto), e n??o se engane, 
                    s??o pe??as que determinam vit??rias. Pe??es s?? avan??am pra frente, 1 casa por vez, 
                    com exce????o do primeiro avan??o, que pode ser feito com at?? 2 casas. S??o as ??nicas 
                    pe??as que capturam de forma diferente do movimento em si: pe??es capturam nas diagonais 
                    superiores, tamb??m com 1 casa de alcance. Se um pe??o cruza o tabuleiro, ele pode ser 
                    promovido para qualquer outra pe??a (excetuando o rei.)</p>
                </div>
            </div>

            <h2>Cavalo</h2>
            <div className="topic">
                <img src={cavalo} />
                <div className="box">
                    <p>
                        Vamos aprender o cavalo.
                        O movimento do cavalo pode ser a pe??a mais confusa. 
                        Diferente das outras, ele pode ???pular??? pe??as, n??o tendo 
                        seu movimento obstru??do de maneira alguma. O cavalo se movimenta em ???L???,
                        ou seja, um movimento de bispo e um movimento de torre. Apesar de ter um 
                        alcance limitado, ?? uma pe??a muito forte em posi????es fechadas, tendo um valor 
                        base de 3.
                    </p>
                </div>
            </div>

            <h2>Bispo</h2>
            <div className="topic">
                <img src={bispo} />
                <div className="box">
                    <p>
                        A pr??xima pe??a ?? o bispo.
                        Cada um dos bispo pode se movimentar em 
                        metade das casas do tabuleiro, por se movimentar diagonalmente. 
                        Um deles nas casas claras e outro nas casas escuras. Assim sendo, o par 
                        dos bispos ativos costumam ser muito fortes para quem os usar bem. Bispos 
                        s??o melhores utilizados em posi????es abertas e tem um valor estimado entre 3 e 3,25.
                    </p>
                </div>
            </div>

            <h2>Torre</h2>
            <div className="topic">
                <img src={torre} />
                <div className="box">
                    <p>
                        A primeira pe??a a ser vista ?? a torre.

                        Torres s??o fortes no fim do jogo e tem um valor estimado de 5 no xadrez. 
                        Seus movimentos se a linhas verticais e horizontais. Perceba que pe??as limitam 
                        sua movimenta????o. Assim sendo, torres s??o melhores aproveitadas com poucas pe??as, 
                        especialmente nas colunas (A a H), o que costuma ocorrer no fim do jogo.
                    </p>
                </div>
            </div>

            <h2>Rainha</h2>
            <div className="topic">
                <img src={rainha} />
                <div className="box">
                    <p>
                        Vamos para uma das melhores pe??as, a rainha.

                        A rainha ?? a pe??a mais forte do jogo. Com um valor de 9, 
                        a rainha pode se movimentar como a torre e o bispo combinados, 
                        sendo uma excelente pe??a de ataque. Pelo seu alto valor, a rainha 
                        n??o costuma ser usada no in??cio do jogo, para n??o estar sujeita a ataques
                        desnecess??rios. Quase sempre, perder uma rainha por outra pe??a costuma 
                        significar uma derrota.
                    </p>
                </div>
            </div>
            
            <h2>Rei</h2>
            <div className="topic">
                <img src={rei} />
                <div className="box">
                    <p>
                        Por fim, a pe??a central do xadrez: o rei.

                        O rei ?? uma pe??a fr??gil, e tamb??m a mais importante. 
                        Podendo movimentar-se pra qualquer dire????o, mas apenas 
                        com o alcance de 1 casa, o rei precisa estar sob prote????o 
                        enquanto houver muitas pe??as no tabuleiro. No fim do jogo, o rei ?? 
                        muito importante e deve ser ativo no jogo. Sua atua????o nesse momento 
                        estima-se valer um total de 4 pontos.
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