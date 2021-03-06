import React, {useState, useEffect} from 'react';
import './stylesheets/tutorial.css';

import q1avancado from './images/questoes/avancado/questoes/q1avancado.png';
import q2avancado from './images/questoes/avancado/questoes/q2avancado.png';
import q3avancado from './images/questoes/avancado/questoes/q3avancado.png';
import q4avancado from './images/questoes/avancado/questoes/q4avancado.png';
import q5avancado from './images/questoes/avancado/questoes/q5avancado.png';
import q6avancado from './images/questoes/avancado/questoes/q6avancado.png';
import q7avancado from './images/questoes/avancado/questoes/q7avancado.png';
import q8avancado from './images/questoes/avancado/questoes/q8avancado.png';
import q9avancado from './images/questoes/avancado/questoes/q9avancado.png';
import q10avancado from './images/questoes/avancado/questoes/q10avancado.png';

import estrategia1 from './images/questoes/avancado/estrategia1.png';
import estrategia2 from './images/questoes/avancado/estrategia2.png';
import giocco from './images/questoes/avancado/giocco.png';
import ruylopez from './images/questoes/avancado/ruylopez.png';
import kasparov from './images/questoes/avancado/kasparov.png';
import morphy from './images/questoes/avancado/morphy.png';

import {db} from './services/firebase';
import { collection, getDocs, updateDoc, doc} from 'firebase/firestore';
import { useAuth } from './contexts/AuthContext';

export default function TutorialAdv(){

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
            Img:[q1avancado],
            Options: [
                {Text:'h4', isCorrect: false},
                {Text:'Cg3', isCorrect: false},
                {Text:'Tae1', isCorrect: false},
                {Text:'Cf6+', isCorrect: true},
            ],
        },
        {
            Img:[q2avancado],
            Options: [
                {Text:'Ch5', isCorrect: false},
                {Text:'De4', isCorrect: false},
                {Text:'Dxg7+', isCorrect: false},
                {Text:'Tae8', isCorrect: true},
            ],
        },
        {
            Img:[q3avancado],
            Options: [
                {Text:'Te3', isCorrect: false},
                {Text:'Ce8', isCorrect: true},
                {Text:'Ch5', isCorrect: false},
                {Text:'De4', isCorrect: false},
            ],
        },
        {
            Img:[q4avancado],
            Options: [
                {Text:'De4', isCorrect: false},
                {Text:'Te3', isCorrect: false},
                {Text:'Txf7', isCorrect: true},
                {Text:'Dxg7', isCorrect: false},
            ],
        },
        {
            Img:[q5avancado],
            Options: [
                {Text:'Dg6', isCorrect: true},
                {Text:'De4', isCorrect: false},
                {Text:'Txg7+', isCorrect: false},
                {Text:'Tef1', isCorrect: false},
            ],
        },
        {
            Img:[q6avancado],
            Options: [
                {Text:'Txe6', isCorrect: false},
                {Text:'Bxf5', isCorrect: true},
                {Text:'Txf5', isCorrect: false},
                {Text:'Txg7', isCorrect: false},
            ],
        },
        {
            Img:[q7avancado],
            Options: [
                {Text:'Re8', isCorrect: true},
                {Text:'Rf6', isCorrect: false},
                {Text:'Rd8', isCorrect: false},
                {Text:'Rf7', isCorrect: false},
            ],
        },
        {
            Img:[q8avancado],
            Options: [
                {Text:'De2', isCorrect: false},
                {Text:'g4+', isCorrect: true},
                {Text:'e5', isCorrect: false},
                {Text:'h5', isCorrect: false},
            ],
        },
        {
            Img:[q9avancado],
            Options: [
                {Text:'h5', isCorrect: false},
                {Text:'e5', isCorrect: false},
                {Text:'Tg5', isCorrect: false},
                {Text:'Th5+', isCorrect: true},
            ],
        },
        {
            Img:[q10avancado],
            Options: [
                {Text:'e5+', isCorrect: false},
                {Text:'Txh4+', isCorrect: false},
                {Text:'Df5+', isCorrect: true},
                {Text:'De4', isCorrect: false},
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
            setGain(gain + 1)
            setScore(score + 1);
        }
        else{
            setGain(gain - 1)
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setQuestion(true);
        }
    }

    return(
        <div className="tutorial advanced">
        <div className="header">
            <h1>N??vel avan??ado</h1>
        </div>

        <div className="box">
            <p>
                Voc?? est?? acessando a p??gina de n??vel avan??ado de xadrez. 
                Os tutoriais dessa p??gina s??o sobre a cria????o de planos a longo prazo em uma partida
                real de xadrez. Tratando-se de um jogo puramente estrat??gico, essa se????o cont??m ensinamentos
                cruciais para tomada de decis??o em partidas de todos os n??veis. Depois de dominar todo o conte??do at??
                aqui, creia-se que voc?? seja capaz de conduzir e coordenar suas pe??as para que elas te ajudem nessa jornada.
            </p>

            <p>
                Quando voc?? acumular pontos suficientes em seu rating,
                o site vai automaticamente elevar seu n??vel de jogo e tutoriais 
                mais complexos vir??o, a medida em que sua melhora seja percebida nos exerc??cios mostrados.
            </p>
        </div>

        <h2>Estrat??gias de meio jogo</h2>

        <div className="box">
            <p>
                Nesta se????o, vamos ensinar as estrat??gias de meio jogo no xadrez. 
                Os tabuleiros ter??o casas circuladas em verde, indicando at?? onde 
                determinada pe??a pode se movimentar na posi????o em que est??. Haver?? um tabuleiro 
                experimental no final onde voc?? poder?? testar e usar as pe??as da forma como quiser.
            </p>
        </div>

        <h2>N??o se assuste com complica????es</h2>

        <div className="box">
            <p>
                Considerando o alto n??vel deste tutorial, ser?? analisado primariamente as ideias do lado
                em que se escolhe visualizar a partida. Assim sendo, teremos extensivas discuss??es de variantes
                e de estrat??gias de jogo para cada partida, que servir?? como exemplo.
            </p>
        </div>

        <h2>Estrat??gias de jogo (exemplo 1)</h2>
        <div className="topic">
            <img src={estrategia1} />
            
            <div className="box">
                <p>
                    Na posi????o ao lado, ?? poss??vel visualizar que o plano natural das brancas seria: ativar o bispo
                    de casas negras ao centralizar o cavalo, jogar com a maioria na ala da dama pra criar um pe??o
                    passado e evitar a troca de bispo x cavalo, considerando que as brancas det??m o par de bispos
                    em uma posi????o aberta.
                </p>
            </div>
        </div>

        <h2>Estrat??gias de jogo (exemplo 2)</h2>
        <div className="topic">
            <img src={estrategia2} />
            
            <div className="box">
                <p>
                    Nessa segunda posi????o, as negras desfrutam de alguns temas t??ticos devido ao posicionamento
                    impreciso da rainha das brancas. Para aproveitar essa imprecis??o, ?? necess??rio jogar d5 aproveitando
                    a cravada gra??as a torre de e8 e ativando o bispo de casas brancas, e amea??ar o d4 que seria um 
                    garfo nas pe??as das brancas. Tamb??m ?? importante trazer a torre de a8 para o jogo.
                </p>
            </div>
        </div>

        <h2>Estrat??gias na Giocco Piano</h2>
        <div className="topic">
            <img src={giocco} />

            <div className="box">
                <p>
                    Analisando a abertura italiana, algumas ideias padr??o para explorar essa posi????o aparentemente
                    empatada veem com os princ??pios do xadrez: abrir o pe??o para o bispo de casas negras, fazer roque,
                    preparar o lance b4 para conseguir espa??o na ala da dama e atuar no centro com o cavalo em f3 padr??o.
                    Eventualmente as brancas devem tentar buscar uma ruptura em f4 ou d4, com lances devidos de prepara????o
                    e para atacar tranquilamente as negras com as pe??as desenvolvidas e o rei protegido.    
                </p>
            </div>
        </div>

        <h2>Estrat??gias na Ruy Lopez</h2>
        <div className="topic">
            <img src={ruylopez} />
            
            <div className="box">
                <p>
                    Nessa abertura cl??ssica, alguns planos de desenvolvimento consistem em preparar o lance d4 
                    (que as negras tentar??o impedir) com o lance padr??o c3, que ser?? uma casa guardada para o forte
                    bispo de casas brancas depois do ataque de a6 + b5. O cavalo busca a manobra d2-f1-g3 para preparar o
                    ataque na ala do rei.
                </p>
            </div>
        </div>

        <h2>Analisando partida de Paul Morphy vs Adolf Anderssen (1858)</h2>
        <div className="topic">
            <img src={morphy} />
            
            <div className="box">
                <p>
                    N??o h?? d??vidas do talento de Paul Morphy ao analisar uma partida t??o bem jogada quanto essa. Morphy
                    enxerga lances dados pelo Stockfish no s??culo XIX e pune o dito melhor jogador da ??poca.
                    Priorizando o desenvolvimento e a atividade das pe??as, Morphy deixa a torre de h1 e faz Bxf4, visando aproveitar 
                    o rei no centro. Depois de Cxh1, Morphy faz a combina????o Dd2+ e Bxc7. Ao fazer Rxc7 for??ado, Morphy ganha
                    a dama com Cd5+, dando um duplo. Tendo um cavalo preso e pe??as mal desenvolvidas, Anderssen se v?? em uma situa????o
                    delicada, onde a rainha do Morphy venceu a partida tomando todo o espa??o das brancas e tendo vantagem material incontest??vel.
                </p>
            </div>
        </div>

        <h2>Analisando partida de Kasparov vs Topalov (1999)</h2>
        <div className="topic">
            <img src={kasparov} />
            
            <div className="box">
                <p>
                    Considerados por muitos como a melhor partida de xadrez j?? vista, Kasparov encontra o lance Txd4, sacrificando
                    a longo prazo em uma combina????o t??tica muito bem calculada. A sequ??ncia de Te7+, Dxd4+, b4+ fez com que
                    o rei de Topalov n??o encontrasse mais paz. Com a maioria dos lances for??ados, Kasparov foi capaz de converter uma
                    partida ordin??ria em uma obra prima ao usar do posicionamento do rei advers??rio para sacrificar pe??as e encurral??-lo em
                    uma situa????o de perigo iminente, de tal forma que Topalov foi obrigado a entregar mais material do que Kasparov o tinha 
                    feito antes, o que deu ao campe??o mundial uma vit??ria merecida.
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