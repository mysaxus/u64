import React, {useState, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';

import './stylesheets/style.css';
import './stylesheets/tutorialtest.css';

import q1teste from './images/questoes/nivel/q1nivel.png';
import q2teste from './images/questoes/nivel/q2nivel.png';
import q3teste from './images/questoes/nivel/q3nivel.png';
import q4teste from './images/questoes/nivel/q4nivel.png';
import q5teste from './images/questoes/nivel/q5nivel.png';

import {db} from './services/firebase';
import { collection, getDocs, updateDoc, doc} from 'firebase/firestore';

function TutorialTest(){

    const {currentUser } = useAuth();
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    var rating;

    useEffect(() =>  {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();
    }, [])

    function calcRating(x){
        switch(x){
            case 5:
                return 2000;
                break;
            case 4:
                return 1800;
                break;
            case 3:
                return 1600;
                break;    
            case 2:
                return 1400;
                break;
            case 1:
                return 1200;
                break;
            case 0:
                return 1000;
        }
    }

    const questions = [
        {
            Img: [q1teste],
            Options: [
                {Text: 'Df8+', isCorrect: true},
                {Text: 'Dxg3', isCorrect: false},
                {Text: 'hxg3', isCorrect: false},
                {Text: 'Dxa7+', isCorrect: false},
            ],
        },
        {
            Img: [q2teste],
            Options: [
                {Text: 'Cxf3+', isCorrect: false},
                {Text: 'Dxe1+', isCorrect: true},
                {Text: 'Dh3', isCorrect: false},
                {Text: 'Cb3', isCorrect: false},
            ],
        },
        {
            Img: [q3teste],
            Options: [
                {Text: 'Cxd5', isCorrect: true},
                {Text: 'Cxe7', isCorrect: false},
                {Text: 'Tac1', isCorrect: false},
                {Text: 'Txd5', isCorrect: false},
            ],
        },
        {
            Img: [q4teste],
            Options: [
                {Text: 'Bxd7', isCorrect: false},
                {Text: 'Txd7+', isCorrect: false},
                {Text: 'b7', isCorrect: false},
                {Text: 'Bb7', isCorrect: true},
            ],
        },
        {
            Img: [q5teste],
            Options: [
                {Text: 'f3', isCorrect: false},
                {Text: 'Be5', isCorrect: true},
                {Text: 'Bd4', isCorrect: false},
                {Text: 'Rxg2', isCorrect: false},
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

        const handleNextQuestion = (isCorrect) => {

            if(isCorrect===true){
                setScore(score + 1);
            }

            const nextQuestion = currentQuestion + 1;
            if(nextQuestion < questions.length){ 
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }

    return(
        <div className="tutorial">
            <div className="header">
                <h1>Tutoriais</h1>
            </div>
            <div className="niveltestintro">
                <h2>Teste de nivelamento</h2>
                <p>Se está lendo isso, significa que ainda não tem um nível de xadrez definido. 
                    Portanto, deve-se fazer o teste de nivelamento, que consiste em um pequeno questionário para 
                    avaliar sua habilidade inicial no xadrez. Dependendo de seu resultado, tutoriais de diferentes
                    níveis serão ofertados.
                </p>
                <p>Segue abaixo o seu teste de nivelamento.</p>
            </div>

            <div className="legenda box">
                <h2>Legenda</h2>
                    <span>
                        Se você entende os códigos do tabuleiro de xadrez, pode pular este breve tutorial e ir para as questões.
                    </span>

                    <p>Cabe dizer que em xadrez, existem CÓDIGOS para os lances. Não se preocupe, não são nada complicados
                    e são intuitivos.</p>
                    <p>Para começar, vale dizer que o tabuleiro de xadrez é composto de 64 (aha!) casas. As casas
                        são referidas com letras de <span>A até H em suas colunas</span> e com números de <span>1 a 8 em suas linhas</span>. Os códigos podem ser vistos <span>na
                            extremidade do tabuleiro.</span> Assim sendo, os movimentos sempre serão referentes a casa da coordenada descrita.
                    </p>

                    <p>Abaixo, segue a lista de códigos e seus significados: </p>

                    <ul>
                        <li><span>R</span> = rei; <span>D</span> = dama; <span>T</span> = torre;<span> B</span> = bispo; <span>C</span> = cavalo</li>
                        <li>Vale dizer que quando não tem nenhuma peça no código, o movimento é de <span>peão</span></li>
                        <li><span>Rb4</span> = Rei vai para a casa de b4</li>
                        <li><span>Bc1</span> = Bispo vai para a casa de c1</li>
                        <li><span>a4</span> = Peão (subentende-se que da coluna A) vai para a4</li>
                        <li><span>f7</span> = Peão (subentende-se que da coluna F) vai para f7</li>
                    </ul>

                    <p>Existem movimentos especiais que devem ser representados também:</p>

                    <ul>
                        <li><span>x</span>: significa a captura de uma peça</li>
                        <li><span>+</span>: significa xeque</li>
                        <li><span>#</span>: significa xeque-mate</li>
                        <li><span>O-O</span>: significa roque curto (com a torre de H)</li>
                        <li><span>O-O-O</span>: significa roque longo (com a torre de A)</li>
                        <li><span>Rxb4</span> = Rei toma (uma peça) em b4</li>
                        <li><span>Bxc3</span> = Bispo toma (uma peça) em c3</li>
                        <li><span>dxe4</span> = Peão da coluna D toma (uma peça) em e4</li>
                        <li><span>hxe4</span> = Peão da coluna H toma (uma peça) em e4</li>
                        <li><span>Dh5+</span> = Dama vai para h5 e faz xeque</li>
                        <li><span>Td1+</span> = Torre vai para d1 e faz xeque</li>
                        <li><span>Cf7#</span> = Cavalo vai para f7 e faz xeque-mate</li>
                    </ul>

                    <p><span>Se você entendeu até aqui, já sabe como descrever a maior parte dos movimentos do jogo.</span></p>
                        <p>Existem ainda combinações de símbolos e mais possibilidades. Quando mais de uma peça do mesmo tipo pode
                        ir para a casa de determinado movimento, especifica-se por meio da linha ou coluna em que ela está. 
                        Isso geralmente pode ocorrer com <span>torres e cavalos</span>, que são pares de peças que podem por vezes ir pra uma mesma
                        casa determinada.</p>

                    <ul>
                        <li><span>Tad1</span> = A torre que está na coluna A vai para d1. (A outra torre poderia ir para d1)</li>
                        <li><span>C3f4</span> = O cavalo que está na linha 3 vai para f4. (O outro cavalo poderia ir para f4)</li>
                    </ul>

                    <p>
                        Por último, é possível fazer uma mistura de movimentos! Não se preocupe com o tempo necessário para
                        entender esses códigos. <span>Eles ficarão mais e mais naturais na medida em que se joga.</span> Por mais confuso
                        que pode parecer, vai ser como andar de bicicleta!
                    </p>
                    <ul>
                        <li><span>Cxd3+</span> = Cavalo captura em d3 e faz xeque</li>
                        <li><span>Bxh7+</span> = Bispo captura em h7 e faz xeque</li>
                        <li><span>Tdxf8+</span> = A torre que está na coluna D toma em f8 e faz xeque </li>
                        <li><span>C6xg4#</span> = O cavalo que está na linha 6 toma em g4 e faz xeque-mate </li>
                    </ul>
            </div>

            <div className="niveltest">
                
                {showScore ? (
                    <div className="box result">
                        <h2>Teste finalizado</h2>
                        <p>Pontuação alcançada: {score} de 5</p> 
                        {users.map((user) => {
                            if(user.email === currentUser.email){
                                rating = calcRating(score)
                                const userDoc = doc(db, "users", user.id)
                                updateDoc(userDoc, {nivel: true})
                                updateDoc(userDoc, {rating: rating})
                        }})}
                        <a href="/account">Voltar para perfil</a>
                    </div>
               ) :
                    (
                    <div>
                        <h2>Questão {currentQuestion + 1}</h2>
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
                    </div>)}
            </div>
        </div>
    );
}

export default TutorialTest;