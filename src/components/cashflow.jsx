import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faAsterisk, faCaretDown, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CashFlow = (props)=>{
    
    return (
        <div className="">
            <div className="t-header flex-row">
                <div className="t-title">
                    <FontAwesomeIcon icon={faAsterisk} style={{top:"2px", position:"relative"}} />
                    <span className="bold-text">Cash Flow</span>
                    <span className="faded-text">Last 30 days</span>
                </div>
                <div className="t-action">
                    <a href="#">See all</a>
                </div>
            </div>
            <div className="t-body">
                <div className="flex-row activity cashflow align-center flex-start">
                    <div className="first-col flex-row align-center flex-start active">
                        <div className="activity-logo rounded">
                            <FontAwesomeIcon icon={faDownload} size="2x" style={{color:'#fff'}}/>
                        </div>
                        <div className="activity-details">
                            <div className="client">Money in</div>
                            <div className="bg">$5,080</div>
                        </div>
                    </div>
                    <div className="first-col flex-row align-center flex-start">
                        <div className="activity-logo rounded">
                            <FontAwesomeIcon icon={faUpload} size="2x" style={{color:'#fff'}}/>
                        </div>
                        <div className="activity-details">
                            <div className="client">Money Out</div>
                            <div className="bg">$485.<span style={{opacity:".5", fontSize:"14px"}}>00</span></div>
                        </div>
                    </div>
                </div>

                <div className="range-ui">
                    <div className="flex-row">
                        <div className="left">
                            <span className="indicator" style={{backgroundColor:"#BAABF8"}}>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </span>
                            <span className="client-name">Stripe</span>
                            <span className="percent">75%</span>
                        </div>
                        <div className="right">
                            <span className="money">
                                $3,200.<span className="coin">72</span> 
                            </span>
                        </div>
                    </div>
                    <div className="range" style={{backgroundColor:"#BAABF8", width:"75%"}}></div>
                </div>

                <div className="range-ui">
                    <div className="flex-row">
                        <div className="left">
                            <span className="indicator" style={{backgroundColor:"#94E5FA"}}>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </span>
                            <span className="client-name">Crypo Academy</span>
                            <span className="percent">20%</span>
                        </div>
                        <div className="right">
                            <span className="money">
                                $1,017.<span className="coin">49</span> 
                            </span>
                        </div>
                    </div>
                    <div className="range" style={{backgroundColor:"#94E5FA", width:"20%"}}></div>
                </div>

                <div className="range-ui">
                    <div className="flex-row">
                        <div className="left">
                            <span className="indicator" style={{backgroundColor:"#F1B3D0"}}>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </span>
                            <span className="client-name">Wire Return</span>
                            <span className="percent">6%</span>
                        </div>
                        <div className="right">
                            <span className="money">
                                $318.<span className="coin">44</span> 
                            </span>
                        </div>
                    </div>
                    <div className="range" style={{backgroundColor:"#F1B3D0", width:"6%"}}></div>
                </div>
            </div>
        </div>
    )
}

export default CashFlow;