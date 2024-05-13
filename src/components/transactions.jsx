import { faDropbox, faSkype, faStripe, faStripeS } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import { faMoneyBill, faZ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Transactions = (props)=>{
    
    return (
        <div className="transactions">
            <div className="t-header flex-row">
                <div className="t-title">
                    <FontAwesomeIcon icon={faMoneyBill} style={{top:"2px", position:"relative"}}/>
                    <span className="bold-text">Recent Transactions</span>
                    <span className="faded-text">Last 5 activities</span>
                </div>
                <div className="t-action">
                    <a href="#">See all</a>
                </div>
            </div>
            
            <div className="t-body">
                <div className="flex-row activity align-center">
                    <div className="first-col flex-row align-center">
                        <div className="activity-logo">
                            <FontAwesomeIcon icon={faStripeS} size="2x" style={{color:'#fff'}}/>
                        </div>
                        <div className="activity-details">
                            <div className="client">Stripe</div>
                            <div className="date">Wed, 16 Feb, 18:11</div>
                        </div>
                    </div>
                    <div className="second-col">
                        <span className="activity-type">Business</span>
                    </div>
                    <div className="last-col">
                        <span className="amount success">
                            $1,233.<span className="coins">00</span>
                        </span>
                    </div>
                </div>

                <div className="flex-row activity align-center">
                    <div className="first-col flex-row align-center">
                        <div className="activity-logo">
                            <FontAwesomeIcon icon={faDropbox} size="2x" style={{color:'#fff'}}/>
                        </div>
                        <div className="activity-details">
                            <div className="client">Dropbox</div>
                            <div className="date">Tue, 15 Feb, 14:24</div>
                        </div>
                    </div>
                    <div className="second-col">
                        <span className="activity-type">Equipment</span>
                    </div>
                    <div className="last-col">
                        <span className="amount">
                            -$200.<span className="coins">00</span>
                        </span>
                    </div>
                </div>

                <div className="flex-row activity align-center">
                    <div className="first-col flex-row align-center">
                        <div className="activity-logo">
                            <FontAwesomeIcon icon={faZ} size="2x" style={{color:'#fff'}}/>
                        </div>
                        <div className="activity-details">
                            <div className="client">Zendesk</div>
                            <div className="date">Wed, 16 Feb, 18:11</div>
                        </div>
                    </div>
                    <div className="second-col">
                        <span className="activity-type">Marketing</span>
                    </div>
                    <div className="last-col">
                        <span className="amount danger">
                            -$1,233.<span className="coins">00</span>
                        </span>
                    </div>
                </div>

                <div className="flex-row activity align-center">
                    <div className="first-col flex-row align-center">
                        <div className="activity-logo">
                            <FontAwesomeIcon icon={faSpotify} size="2x" style={{color:'#fff'}}/>
                        </div>
                        <div className="activity-details">
                            <div className="client">Spotify</div>
                            <div className="date">Wed, 16 Feb, 18:11</div>
                        </div>
                    </div>
                    <div className="second-col">
                        <span className="activity-type">Entertainment</span>
                    </div>
                    <div className="last-col">
                        <span className="amount">
                            -$19.<span className="coins">00</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;