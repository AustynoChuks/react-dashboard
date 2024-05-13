import Card from "./card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSquarePlus } from "@fortawesome/free-regular-svg-icons"
import {  } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightDots, faAsterisk} from "@fortawesome/free-solid-svg-icons";
import Transactions from "./transactions";
import CashFlow from "./cashflow";

const Body = (props)=>{
    return (
    <div className="main-body">
        <div className="balance-title">TOTAL BALANCE</div>
        <div className="flex-row align-bottom">
            <div className="balance-section">
                <span className="bal">$30,625</span>
                <span className="insight">
                    <FontAwesomeIcon 
                        icon={faArrowUpRightDots} 
                        style={{marginRight:"10px", paddingLeft:"6px", paddingRight:"6px", backgroundColor:"#A5F301", color:"#000", padding:"3px", borderRadius:"20%"}}/>
                        $328 today May 12th</span>
            </div>
            <div className="menu-section">
                <ul className="menu flex-row">
                    <li className="menu-item">
                        <a href="#">
                            <FontAwesomeIcon icon={faEye}/>
                            <span>View analytics</span>
                        </a>
                    </li>
                    <li className="menu-item divider divider-lg">
                    </li>
                    <li className="menu-item active">
                        <a href="#">Send money</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <FontAwesomeIcon icon={faSquarePlus}/>
                            <span>Add money</span>
                            
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="card-header">
            <span className="icon">
                <FontAwesomeIcon
                style={{backgroundColor:"#27263A", width:"18px", height:"18px", padding:"3px", borderRadius:"50%"}}
                 icon={faAsterisk}/>
            </span>
            <div>
                <span className="text">Overview</span>
                <span className="duration">Last 30 days</span>
            </div>
        </div>
        <div className="card-section flex-row">
            <Card type="bal" title="business account" amount="$33,842" action="View account details"/>
            <Card type="tax" title="Tax reserve" amount="$700" action="Edit tax Automation"/>
            <Card type="savings" title="business savings" amount="$1,623" action="View account details"/>
        </div>

        <div className="tabular-section flex-row">
            <div className="recent-transactions">
                <Transactions/>
            </div>
            <div className="cash-flows">
                <CashFlow/>
            </div>
        </div>
    </div>
    )
}

export default Body;