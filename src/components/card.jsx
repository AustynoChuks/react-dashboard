import { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSave, faFileAlt } from "@fortawesome/free-regular-svg-icons"
import { faArrowDown, faArrowUpRightDots, faChartLine, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from "chart.js"
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
);

const Card = (props)=>{
    const [showStat, setShowStat] = useState(true);
    const cardContainerRef = useRef();
    const swicthStat = ()=>{
        setShowStat((stat)=>!stat);
    }
    return (
        <div className={(showStat && props.type=="bal")?"flex-grow card-container": "card-container"} ref={cardContainerRef} onMouseLeave={()=>setShowStat(false)}>
            <div className="card-body">
                <div className="card-logo">
                    {(props.type == "bal")? 
                        <FontAwesomeIcon icon={faUser} size="2x"/>:
                        ((props.type == "tax") ? 
                        <FontAwesomeIcon icon={faFileAlt} size="2x"/>:
                        <FontAwesomeIcon icon={faLayerGroup} size="2x"/>)
                    }
                </div>
                <div className="card-title">
                    <span className="text">{props.title}</span>
                    <span className="stat">
                        {(props.type == "bal")? 
                            <FontAwesomeIcon 
                                icon={faArrowUpRightDots} 
                                style={{marginRight:"10px", paddingLeft:"6px", paddingRight:"6px", backgroundColor:"#A5F301", color:"#000", padding:"3px", borderRadius:"20%"}}/>:
                            ((props.type == "tax")?
                                <FontAwesomeIcon 
                                icon={faArrowDown} 
                                style={{marginRight:"10px", paddingLeft:"6px", paddingRight:"6px", backgroundColor:"red", color:"#fff", padding:"3px", borderRadius:"20%"}}/>:
                                ""
                            )
                        }
                            12%
                    </span>
                </div>
                <div className="fade-switch">
                    <div className="money">
                        <span>{props.amount}</span>
                    </div>
                    <div className="action flex-row">
                        <span className="action-text">{props.action}</span>
                        <a href="#" onClick={($evt)=>{
                            $evt.preventDefault();
                            swicthStat();
                        }}>
                            <FontAwesomeIcon 
                                icon={faChartLine}
                                style={{backgroundColor:"#5F2EF5", color:"#fff", padding:"7px", borderRadius:"50%", cursor:"pointer"}}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-chart">
                <Line 
                    data={{
                        labels:["Jan", "Feb", "Mar", "Apr", "May"],
                        datasets:[{
                            label:'Polls',
                            data:[23, 14, 12, 17, 11],
                            pointBackgroundColor:"#5F2EF5",
                            showLine:true,
                            borderWidth:1,
                            borderColor:"#5F2EF5",
                            backgroundColor:"#5F2EF5",
                            tension:0.4,
                        }],
                    }}
                    options={{
                        plugins:{
                            legend:true,
                        },
                        scales:{
                            y:{}
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Card;