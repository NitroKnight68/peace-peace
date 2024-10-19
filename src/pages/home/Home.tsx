import { Navbar } from "../../components";
import "./Home.css";
import getEventData from "../../helpers/event";

interface Props {
    wallet: walletInterfaceProps;
}

const Home = (props: Props) => {
    console.log(props);

    const buytick = ()=>{
        console.log("uji")
        getEventData(props.wallet.dAppclient);
    }

    return (
        <div className="home-div">
            <Navbar wallet={props.wallet} />
            <div className="home-h1">PEACE PEACE</div>
            <div className="home-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut enim molestiae dolores officia
                architecto sed reprehenderit, magni eaque excepturi?
            </div>
            <button onClick={()=>{buytick()}}> Buy</button>
        </div>
    );
};

export default Home;
